import { memo } from "react";
import { Product } from "../../../types/store/products/productsSlice";
import { StyleSheet, View } from "react-native";
import MainInfo from "./MainInfo";

type Props = {
    product: Product
}

const Information = memo(({ product }: Props) => {
    return (
        <View style={styles.container}>
            <MainInfo
                title={product.title}
                brand={product.brand}
                price={product.price}
                discountPercentage={product.discountPercentage}
            />
        </View>
    )
})

export default Information

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    }
})