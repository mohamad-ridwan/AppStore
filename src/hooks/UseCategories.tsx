import { useCallback, useEffect, useMemo, useState } from "react"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { Category, ProductsCategoriesT } from "../types/store/products/productsSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { addProduct, addProductsCategories } from "../store/products/productsSlice"
import { createSelector } from "reselect"
import { RootState } from "../store"
import { products, productsByCategory, productsCategories } from "../store/products/productAction"
import { HomeDataT } from "../types/sections/home"
import HeaderBar from "../components/header-bar"
import ListCategories from "../sections/categories/lists"
import CategoryCard from "../components/card/CategoryCard"
import ListPickCategories from "../components/list-pick-categories"

const categoriesScreenDataElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'CATEGORIES'
    },
]
// PRODUCTS BY CATEGORY SCREEN DATA ELEMENT
const productsByCSDataElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'CATEGORIES'
    },
]

export default function UseCategories() {
    const [activeCategory, setActiveCategory] = useState<Category>(Category.All)
    const [loadingCategories, setLoadingProducts] = useState<boolean>(true)
    const [loadingProductsByCategory, setLoadingProductsByCategory] = useState<boolean>(true)

    const productsCategoriesSlice: any = createSelector(
        [(state: RootState) => state.productsSlice],
        productSlice => {
            return productSlice.productsCategories
        }
    )
    const productSlice: any = createSelector(
        [(state: RootState) => state.productsSlice],
        productSlice => {
            return productSlice.product
        }
    )
    const productsCategoriesState = useSelector(productsCategoriesSlice, shallowEqual) as ProductsCategoriesT[]
    const productsState = useSelector(productSlice, shallowEqual)

    const dispatch = useDispatch() as any
    const isFocused = useIsFocused()
    const navigation = useNavigation()

    const categoriesByScreenData = useMemo((): ProductsCategoriesT[] => {
        if (productsCategoriesState?.length > 0) {
            return productsCategoriesState.map((item) => ({
                ...item,
                img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }))
        }
        return []
    }, [productsCategoriesState])

    const handleGetCategories = useCallback(async () => {
        const categories = await dispatch(productsCategories())
        if (categories.meta.requestStatus.rejected) {
            setLoadingProducts(false)
            return
        }
        dispatch(addProductsCategories([
            {
                slug: 'all',
                name: 'All',
                url: 'all'
            },
            ...categories.payload
        ]))
        setLoadingProducts(false)
    }, [])

    // GET PRODUCTS CATEGORIES
    useEffect(() => {
        handleGetCategories()
    }, [])

    const handleGetProductsByCategory = useCallback(async () => {
        setLoadingProductsByCategory(true)
        const productsData = activeCategory === Category.All ?
            await dispatch(products())
            :
            await dispatch(productsByCategory(activeCategory))
        if (!isFocused) {
            setLoadingProductsByCategory(false)
            return
        }
        if (
            productsData.type === 'products/fulfilled' ||
            productsData.type === 'products-by-categories/fulfilled'
        ) {
            dispatch(addProduct(productsData.payload))
        }
        setLoadingProductsByCategory(false)
    }, [activeCategory, isFocused])

    // GET PRODUCTS BY CATEGORY
    useEffect(() => {
        handleGetProductsByCategory()
    }, [activeCategory])

    const handlePickCategory = useCallback((type: Category) => {
        setActiveCategory(type)
    }, [])

    const renderItem = useCallback(({ item }: { item: ProductsCategoriesT }) => {
        return (
            <CategoryCard
                image={item.img}
                name={item.name}
            />
        )
    }, [categoriesByScreenData])

    const handleBackPress = useCallback((screenName: string) => {
        navigation.navigate(screenName as never)
    }, [])

    const handleNavigate = useCallback((...params: any) => {
        navigation.navigate(...params as never)
    }, [])

    const renderItemCategoriesScreen = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar headerName="Categories" onBackPress={(event) => handleBackPress('Home')} />
            )
        } else if (item.sectionType === 'CATEGORIES') {
            return (
                <ListCategories
                    productsCategoriesState={categoriesByScreenData}
                    handleNavigate={handleNavigate}
                />
            )
        }
        return null
    }, [categoriesByScreenData])

    const renderItemProductsByCategories = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar
                    headerName="Categories"
                    onBackPress={(event) => handleBackPress('Categories')}
                    centerBarType="search"
                    flexCenter={8}
                    flexRight={0}
                />
            )
        } else if (item.sectionType === 'CATEGORIES') {
            return (
                <ListPickCategories
                    productsCategories={categoriesByScreenData}
                    renderItem={renderItem}
                />
            )
        }
        return null
    }, [categoriesByScreenData])

    return {
        renderItem,
        productsCategoriesState,
        loadingCategories,
        productsState,
        loadingProductsByCategory,
        renderItemCategoriesScreen,
        categoriesScreenDataElement,
        handleNavigate,
        productsByCSDataElement,
        renderItemProductsByCategories,
        categoriesByScreenData
    }
}