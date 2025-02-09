import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import UseCategories from "../../../hooks/UseCategories";
import ListPickCategories from "./list-pick-categories";
import ProductList from "../../../components/product-list";

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
            <ProductList />
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