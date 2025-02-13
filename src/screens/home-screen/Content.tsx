import { memo } from "react";
import { Animated, FlatList } from "react-native";
import { HomeDataT } from "../../types/sections/home";

type Props = {
    data: HomeDataT[]
    renderItem: ({ item }: {
        item: HomeDataT;
    }) => React.JSX.Element | null
    scrollY: Animated.Value
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const Content = memo(({
    data,
    renderItem,
    scrollY
}: Props) => {
    return (
        <AnimatedFlatList
            data={data}
            renderItem={renderItem as any}
            keyExtractor={(item: any) => item.id}
            maxToRenderPerBatch={3}
            initialNumToRender={5}
            stickyHeaderIndices={[0]}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: false }
            )}
        />
    )
})

export default Content