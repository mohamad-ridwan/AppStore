import { memo } from "react";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { PickDataCategoriesT } from "../../../../types/sections/home";
import { View } from "react-native";

type Props = {
    data: PickDataCategoriesT[]
    renderItem: ListRenderItem<PickDataCategoriesT>
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
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{ width: 7 }} />}
        />
    )
})

export default ListPickCategories

const styles = StyleSheet.create({
    container: {

    }
})