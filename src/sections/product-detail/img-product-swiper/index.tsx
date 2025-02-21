import { memo, useMemo } from "react";
import { BaseImageSwiperT, ImageSwiperPropsT } from "../../../types/components/image-swiper";
import { PixelRatio, View } from "react-native";
import ImageSwiper from "../../../components/image-swiper";
import ItemImageSwiper from "../../../components/image-swiper/ItemImageSwiper";

type Props = {
    images?: string[]
}

const ImgProductSwiper = memo(({
    images = []
}: Props) => {
    const imageProduct = useMemo((): ImageSwiperPropsT<BaseImageSwiperT>[] => {
        if (images.length === 0) {
            return []
        }
        return images.map((image) => ({
            data: { image }
        }))
    }, [images])
    return (
        <View>
            <ImageSwiper
                data={imageProduct}
                autoPlay={false}
                height={PixelRatio.roundToNearestPixel(250)}
                paddingTop={0}
                renderItem={({ item }) => {
                    return (
                        <ItemImageSwiper
                            uri={item.data.image}
                        />
                    )
                }
                }
            />
        </View>
    )
})

export default ImgProductSwiper