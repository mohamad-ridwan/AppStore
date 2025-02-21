import { memo } from "react";
import { ListRenderItem, PixelRatio, StyleSheet, View } from "react-native";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { BaseImageSwiperT, ImageSwiperPropsT } from "../../types/components/image-swiper";

type Props<T extends ImageSwiperPropsT<BaseImageSwiperT>[]> = {
    data: T
    renderItem?: ListRenderItem<ImageSwiperPropsT<BaseImageSwiperT>> | null
    height?: number
    paddingTop?: number
    autoPlay?: boolean
    autoPlayDelay?: number
    autoPlayLoop?: boolean
}

const ImageSwiper = memo(<T extends ImageSwiperPropsT<BaseImageSwiperT>[],>({
    data,
    renderItem,
    height = PixelRatio.roundToNearestPixel(130),
    paddingTop = 10,
    autoPlay = true,
    autoPlayDelay = 2,
    autoPlayLoop = true
}: Props<T>) => {
    return (
        <View style={[
            styles.container,
            {
                height,
                paddingTop
            }
        ]}>
            <SwiperFlatList
                autoplay={autoPlay}
                autoplayDelay={autoPlayDelay}
                autoplayLoop={autoPlayLoop}
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
    },
})