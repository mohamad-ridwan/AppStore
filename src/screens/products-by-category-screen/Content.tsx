import { memo } from "react";
import { HomeDataT } from "../../types/sections/home";
import { FlatList } from "react-native";

type Props = {
    productsByCSDataElement: HomeDataT[]
    renderItemProductsByCategories: ({ item }: {
        item: HomeDataT;
    }) => React.JSX.Element | null
}

const Content = memo(({
    productsByCSDataElement,
    renderItemProductsByCategories
}: Props) => {
    return (
        <FlatList
            data={productsByCSDataElement}
            renderItem={renderItemProductsByCategories}
            keyExtractor={(item) => item.id}
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