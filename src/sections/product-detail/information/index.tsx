import { memo } from "react";
import { Product } from "../../../types/store/products/productsSlice";
import { StyleSheet, View } from "react-native";
import MainInfo from "./main-info";

type Props = {
    product: Product
    discountPrice?: string
}

const Information = memo(({ product, discountPrice }: Props) => {
    return (
        <View style={styles.container}>
            <MainInfo
                title={product.title}
                brand={product.brand}
                price={product.price}
                discountPercentage={product.discountPercentage}
                discountPrice={discountPrice}
                rating={product.rating}
                totalReviews={product.reviews?.length}
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