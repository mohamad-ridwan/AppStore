import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import UseCategories from "../../../hooks/UseCategories";
import ProductList from "../../../components/product-list";
import ListPickCategories from "../../../components/list-pick-categories";
import { ProductsData } from "../../../types/store/products/productsSlice";

const Categories = memo(() => {
    const {
        renderItem,
        categoriesByScreenData,
        productsCategory
    } = UseCategories()

    return (
        <View style={styles.container}>
            <Header />
            <ListPickCategories
                productsCategories={categoriesByScreenData}
                renderItem={renderItem}
            />
            <ProductList products={productsCategory as ProductsData} />
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