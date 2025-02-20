import { useCallback, useEffect, useState } from "react";
import { HomeDataT } from "../types/sections/home";
import HeaderBar from "../components/header-bar";
import { useDispatch } from "react-redux";
import { productById } from "../store/products/productAction";
import { Product } from "../types/store/products/productsSlice";
import ImgProductSwiper from "../sections/product-detail/img-product-swiper";

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
    const [product, setProduct] = useState<Product>({} as Product)

    const dispatch = useDispatch() as any

    const renderItemScreenData = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar />
            )
        } else if (item.sectionType === 'SWIPER') {
            return <ImgProductSwiper images={product?.images} />
        }
        return null
    }, [product])

    const handleGetProductById = useCallback(async () => {
        const product = await dispatch(productById(productId))
        if (product.type === 'product-by-id/fulfilled') {
            setProduct(product.payload)
        }
    }, [productId, id])

    useEffect(() => {
        handleGetProductById()
    }, [productId])

    useEffect(() => {
        setProductId(id)
    }, [id])

    return {
        dataScreenElement,
        renderItemScreenData,
        product
    }
}

export default useProductDetail