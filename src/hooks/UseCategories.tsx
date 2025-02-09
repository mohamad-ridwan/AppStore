import { useCallback, useEffect, useState } from "react"
import PickCategoryItem from "../sections/home/categories/list-pick-categories/PickCategoryItem"
import { Category, ProductsCategoriesT } from "../types/store/products/productsSlice"
import { useDispatch } from "react-redux"
import { productsCategories } from "../store/products/productAction"

export default function UseCategories() {
    const [activeCategory, setActiveCategory] = useState<Category>(Category.All)
    const [dataPickCategory, setDataPickCategory] = useState<ProductsCategoriesT[]>([])
    const [loadingCategories, setLoadingProducts] = useState<boolean>(true)

    const dispatch = useDispatch() as any

    async function handleGetCategories(): Promise<void> {
        const categories = await dispatch(productsCategories())
        if(categories.meta.requestStatus.rejected){
            setLoadingProducts(false)
            return
        }
        setDataPickCategory(categories.payload)
        setLoadingProducts(false)
    }

    useEffect(() => {
        handleGetCategories()
    }, [])

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

    return {
        dataPickCategory,
        renderItem,
        loadingCategories
    }
}