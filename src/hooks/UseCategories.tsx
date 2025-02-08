import { useCallback, useState } from "react"
import { CategoryNamesT, PickDataCategoriesT } from "../types/sections/home"
import PickCategoryItem from "../sections/home/categories/list-pick-categories/PickCategoryItem"

export default function UseCategories() {
    const [activeCategory, setActiveCategory] = useState<CategoryNamesT>('all')
    const [dataPickCategory, setDataPickCategory] = useState<PickDataCategoriesT[]>([
        {
            id: '1',
            name: 'All',
            type: 'all'
        },
        {
            id: '2',
            name: 'Smartphones',
            type: 'smartphone'
        },
        {
            id: '3',
            name: 'Headphones',
            type: 'headphones'
        },
        {
            id: '4',
            name: 'Laptop',
            type: 'laptop'
        },
        {
            id: '5',
            name: 'PlayStation',
            type: 'playstation'
        },
    ])

    function handlePickCategory(type: CategoryNamesT) {
        setActiveCategory(type)
    }

    const renderItem = useCallback(({ item }: { item: PickDataCategoriesT }) => {
        return <PickCategoryItem
            name={item.name}
            type={item.type}
            isActive={activeCategory === item.type}
            handlePickCategory={handlePickCategory}
        />
    }, [activeCategory])

    return {
        dataPickCategory,
        renderItem
    }
}