import { Fragment, memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import ProductCard from "../card/ProductCard";
import { ProductsData } from "../../types/store/products/productsSlice";
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    products: ProductsData
}

const ProductList = memo(({
    products
}: Props) => {
    return (
        <View style={styles.container}>
            {products?.products && products.products.map((product, key) => {
                return (
                    <Fragment key={key}>
                        <ProductCard
                            name={product.title}
                            rate="4.5"
                            nameNumberOfLines={2}
                            price={`$${product.price}`}
                            imgUrl={product.thumbnail}
                            imgBgColor={THEME_COLOR.PRIMARY_COLOR.gray}
                            heightImg={PixelRatio.roundToNearestPixel(150)}
                            widthImg="100%"
                            nameFontSize={12}
                            priceFontSize={13}
                            priceFontWeight={700}
                            nameWidth="80%"
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