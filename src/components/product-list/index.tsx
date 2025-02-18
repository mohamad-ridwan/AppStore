import { Fragment, memo } from "react";
import { GestureResponderEvent, PixelRatio, StyleSheet, View } from "react-native";
import ProductCard from "../card/ProductCard";
import { Product, ProductsData } from "../../types/store/products/productsSlice";
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    products: ProductsData
    containerMarginTop?: number
    onPress?: (event: GestureResponderEvent, product: Product) => void
}

const ProductList = memo(({
    products,
    containerMarginTop,
    onPress
}: Props) => {
    return (
        <View style={[
            styles.container,
            { marginTop: containerMarginTop }
        ]}>
            {products?.products && products.products.map((product, key) => {
                return (
                    <Fragment key={key}>
                        <ProductCard
                            name={product.title}
                            rate={`${product.rating}`}
                            nameNumberOfLines={2}
                            icon="star"
                            colorIcon={THEME_COLOR.PRIMARY_COLOR.yellowStar}
                            price={`$${product.price}`}
                            imgUrl={product.thumbnail}
                            imgBgColor={THEME_COLOR.PRIMARY_COLOR.gray}
                            heightImg={PixelRatio.roundToNearestPixel(150)}
                            onPress={(event) => {
                                if (onPress) onPress(event, product)
                            }}
                            widthImg="100%"
                            nameFontSize={12}
                            priceFontSize={13}
                            priceFontWeight={700}
                            nameWidth="75%"
                        />
                    </Fragment>
                )
            })}
        </View>
    )
})

export default ProductList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})