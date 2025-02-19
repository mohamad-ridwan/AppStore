import { useCallback } from "react";
import { HomeDataT } from "../types/sections/home";
import HeaderBar from "../components/header-bar";

const dataScreenElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
]

const useProductDetail = () => {
    const renderItemScreenData = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar />
            )
        }
        return null
    }, [])
    return {
        dataScreenElement,
        renderItemScreenData
    }
}

export default useProductDetail