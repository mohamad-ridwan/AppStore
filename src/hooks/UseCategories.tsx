import { useCallback, useEffect, useState } from "react"
import { useIsFocused } from "@react-navigation/native"
import PickCategoryItem from "../sections/home/categories/list-pick-categories/PickCategoryItem"
import { Category, ProductsCategoriesT } from "../types/store/products/productsSlice"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { addProduct, addProductsCategories } from "../store/products/productsSlice"
import { createSelector } from "reselect"
import { RootState } from "../store"
import { products, productsByCategory, productsCategories } from "../store/products/productAction"
import { HomeDataT } from "../types/sections/home"
import HeaderBar from "../components/header-bar"

export default function UseCategories() {
    const [activeCategory, setActiveCategory] = useState<Category>(Category.All)
    const [loadingCategories, setLoadingProducts] = useState<boolean>(true)
    const [loadingProductsByCategory, setLoadingProductsByCategory] = useState<boolean>(true)
    const [categoriesScreenDataElement] = useState<HomeDataT[]>([
        {
            id: '1',
            sectionType: 'HEADER'
        },
    ])

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
    const productsCategoriesState = useSelector(productsCategoriesSlice, shallowEqual)
    const productsState = useSelector(productSlice, shallowEqual)

    const dispatch = useDispatch() as any
    const isFocused = useIsFocused()

    async function handleGetCategories(): Promise<void> {
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
    }

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

    function handlePickCategory(type: Category) {
        setActiveCategory(type)
    }

    const renderItem = useCallback(({ item }: { item: ProductsCategoriesT }) => {
        return <PickCategoryItem
            name={item.name}
            slug={item.slug}
            isActive={activeCategory === item.slug}
            handlePickCategory={handlePickCategory}
        />
    }, [activeCategory])

    const renderItemCategoriesScreen = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar headerName="Categories" />
            )
        }
        return null
    }, [])

    return {
        renderItem,
        productsCategoriesState,
        loadingCategories,
        productsState,
        loadingProductsByCategory,
        renderItemCategoriesScreen,
        categoriesScreenDataElement
    }
}