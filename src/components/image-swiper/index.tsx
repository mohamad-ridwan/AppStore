import { memo } from "react";
import { ListRenderItem, PixelRatio, StyleSheet, View } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { BaseImageSwiperT, ImageSwiperPropsT } from "../../types/components/image-swiper";

type Props<T extends ImageSwiperPropsT<BaseImageSwiperT>[]> = {
    data: T
    renderItem?: ListRenderItem<ImageSwiperPropsT<BaseImageSwiperT>> | null
}

const ImageSwiper = memo(<T extends ImageSwiperPropsT<BaseImageSwiperT>[],>({
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