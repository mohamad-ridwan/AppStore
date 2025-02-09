import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import FastImage from 'react-native-fast-image'

const Banner = memo(() => {
    return (
        <View style={styles.container}>
            <FastImage
                style={styles.image}
                source={require('../../assets/images/banner.jpg')}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
    )
})

export default Banner

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: PixelRatio.roundToNearestPixel(130),
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    image: {
        borderRadius: 15,
        width: '100%',
        height: '100%',
    }
})