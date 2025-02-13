import { memo } from "react";
import { FlatList } from "react-native";
import { HomeDataT } from "../../types/sections/home";

type Props = {
    categoriesScreenDataElement: HomeDataT[]
    renderItemCategoriesScreen: ({ item }: {
        item: HomeDataT;
    }) => React.JSX.Element | null

}

const Content = memo(({
    categoriesScreenDataElement,
    renderItemCategoriesScreen
}: Props) => {
    return (
        <FlatList
            data={categoriesScreenDataElement}
            renderItem={renderItemCategoriesScreen}
            keyExtractor={item => item.id}
            maxToRenderPerBatch={3}
            initialNumToRender={5}
            stickyHeaderIndices={[0]}
        />
    )
})

export default Content