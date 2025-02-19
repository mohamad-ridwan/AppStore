import { useCallback, useEffect, useState } from "react";
import { HomeDataT } from "../types/sections/home";
import HeaderBar from "../components/header-bar";
import { useDispatch } from "react-redux";
import { productById } from "../store/products/productAction";

const dataScreenElement: HomeDataT[] = [
    {
        id: '1',
        sectionType: 'HEADER'
    },
    {
        id: '2',
        sectionType: 'SWIPER'
    }
]

type Props = {
    id: number
}

const useProductDetail = ({ id }: Props) => {
    const [productId, setProductId] = useState<number>(id)
    const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true)

    const dispatch = useDispatch() as any

    const renderItemScreenData = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar />
            )
        }
        return null
    }, [])

    const handleGetProductById = useCallback(async () => {
        const product = await dispatch(productById(productId))
    }, [productId, id])

    useEffect(() => {
        handleGetProductById()
    }, [productId])

    useEffect(() => {
        setProductId(id)
    }, [id])

    return {
        dataScreenElement,
        renderItemScreenData
    }
}

export default useProductDetail