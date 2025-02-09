import { memo } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { View } from "react-native";
import { ProductsCategoriesT } from "../../../../types/store/products/productsSlice";

type Props = {
    data: ProductsCategoriesT[]
    renderItem: ListRenderItem<ProductsCategoriesT>
}

const ListPickCategories = memo(({
    data,
    renderItem
}: Props) => {
    return (
        <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            initialNumToRender={6}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />
    )
})

export default ListPickCategories

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    }
})