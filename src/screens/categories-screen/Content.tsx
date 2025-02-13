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
            windowSize={3}
            viewabilityConfig={{
                waitForInteraction: true,
                viewAreaCoveragePercentThreshold: 20,
                minimumViewTime: 250,
                itemVisiblePercentThreshold: 20
            }}
        />
    )
})

export default Content