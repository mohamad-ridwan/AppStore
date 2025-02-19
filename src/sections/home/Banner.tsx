import { memo } from "react";
import { Dimensions, PixelRatio, StyleSheet, View } from "react-native";
import FastImage from 'react-native-fast-image'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useHome } from "../../hooks/useHome";

const Banner = memo(() => {
    const { bannerData } = useHome()
    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                data={bannerData}
                renderItem={({ item }) => (
                    <View style={styles.imgSwiperContainer}>
                        <FastImage
                            style={styles.image}
                            source={{ uri: item }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                    </View>
                )}
            />
        </View>
    )
})

export default Banner

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: PixelRatio.roundToNearestPixel(130),
        paddingTop: 10,
    },
    imgSwiperContainer: {
        width: Dimensions.get('screen').width,
        paddingHorizontal: 10
    },
    image: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
    }
})