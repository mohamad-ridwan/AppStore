import { memo } from "react";
import { FlatList } from "react-native";
import { HomeDataT } from "../../types/sections/home";

type Props = {
    dataScreenElement: HomeDataT[]
    renderItemScreenElement: ({ item }: {
        item: HomeDataT;
    }) => React.JSX.Element | null
}

const Content = memo(({
    dataScreenElement,
    renderItemScreenElement,
}: Props) => {
    return (
        <FlatList
            data={dataScreenElement}
            renderItem={renderItemScreenElement}
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