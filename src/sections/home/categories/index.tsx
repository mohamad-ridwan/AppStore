import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import useCategories from "../../../hooks/useCategories";
import ProductList from "../../../components/product-list";
import ListPickCategories from "../../../components/list-pick-categories";
import { ProductsData } from "../../../types/store/products/productsSlice";

const Categories = memo(() => {
    const {
        renderItem,
        categoriesByScreenData,
        productsCategory,
        handleNavigate
    } = useCategories({})

    return (
        <View style={styles.container}>
            <Header />
            <ListPickCategories
                productsCategories={categoriesByScreenData}
                renderItem={renderItem}
            />
            <ProductList
                products={productsCategory as ProductsData}
                onPress={(event, product) => handleNavigate('ProductDetail', product.id)}
            />
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
})