import { memo } from "react";
import { ListRenderItem, PixelRatio, StyleSheet, View } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';

type Props<T> = {
    data: T[]
    renderItem?: ListRenderItem<any> | null
}

const ImageSwiper = memo(<T,>({
    data,
    renderItem
}: Props<T>) => {
    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
})

export default ImageSwiper

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: PixelRatio.roundToNearestPixel(130),
        paddingTop: 10,
    },
})