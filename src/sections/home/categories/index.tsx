import { memo } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Header";
import UseCategories from "../../../hooks/UseCategories";
import ListPickCategories from "./list-pick-categories";

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
        </View>
    )
})

export default Categories

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})