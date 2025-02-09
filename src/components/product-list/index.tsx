import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import ProductCard from "../card/ProductCard";

const ProductList = memo(() => {
    return (
        <View style={styles.container}>
            <ProductCard
                name="AirPods"
                rate="4.5"
                price="$132.00"
                heightImg={PixelRatio.roundToNearestPixel(150)}
                widthImg="100%"
                nameFontSize={12}
                priceFontSize={13}
                priceFontWeight={700}
            />
            <ProductCard
                name="AirPods"
                rate="4.5"
                price="$132.00"
                heightImg={PixelRatio.roundToNearestPixel(150)}
                widthImg="100%"
                nameFontSize={12}
                priceFontSize={13}
                priceFontWeight={700}
            />
            <ProductCard
                name="AirPods"
                rate="4.5"
                price="$132.00"
                heightImg={PixelRatio.roundToNearestPixel(150)}
                widthImg="100%"
                nameFontSize={12}
                priceFontSize={13}
                priceFontWeight={700}
            />
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