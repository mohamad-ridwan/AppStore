import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import Header from "./Header";
import UseCategories from "../../../hooks/UseCategories";
import ListPickCategories from "./list-pick-categories";
import ProductCard from "../../../components/card/ProductCard";

const Categories = memo(() => {
    const {
        dataPickCategory,
        renderItem
    } = UseCategories()

    return (
        <View style={styles.container}>
            <Header />
            <ListPickCategories
                data={dataPickCategory}
                renderItem={renderItem}
            />
            <View style={styles.products}>
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
        </View>
    )
})

export default Categories

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 10,
        gap: 10
    },
    products: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})