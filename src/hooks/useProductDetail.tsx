import { useCallback, useEffect, useMemo, useState } from "react";
import { HomeDataT } from "../types/sections/home";
import HeaderBar from "../components/header-bar";
import { useDispatch } from "react-redux";
import { productById } from "../store/products/productAction";
import { Product } from "../types/store/products/productsSlice";
import ImgProductSwiper from "../sections/product-detail/img-product-swiper";
import { productDetailData } from "../assets/data/product-detail";
import Information from "../sections/product-detail/information";
import { useNavigation } from "@react-navigation/native";
import { formatHelper } from "../helpers/format";

const {
    dataScreenElement,
    dataIcons
} = productDetailData

const {
    formatterCurrency
} = formatHelper

type Props = {
    id: number
}

const useProductDetail = ({ id }: Props) => {
    const [productId, setProductId] = useState<number>(id)
    const [product, setProduct] = useState<Product>({} as Product)

    const dispatch = useDispatch() as any

    const navigation = useNavigation()

    const discountPrice = useMemo((): string | undefined => {
        if (!product?.id) {
            return
        }
        const price = product.price
        const discountPercentage = product.discountPercentage

        const discountAmount = (price * discountPercentage) / 100

        const discountedPrice = price - discountAmount
        return `${formatterCurrency('USD').format(discountedPrice)}`
    }, [product])

    const renderItemScreenData = useCallback(({ item }: { item: HomeDataT }) => {
        if (item.sectionType === 'HEADER') {
            return (
                <HeaderBar
                    headerName="Detail Product"
                    dataIcons={dataIcons}
                    onBackPress={() => navigation.goBack()}
                />
            )
        } else if (item.sectionType === 'SWIPER') {
            return <ImgProductSwiper images={product?.images} />
        } else if (item.sectionType === 'INFORMATION') {
            return <Information product={product} discountPrice={discountPrice} />
        }
        return null
    }, [product, discountPrice])

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
        product,
    }
}

export default useProductDetail