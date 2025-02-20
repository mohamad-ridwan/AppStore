import { memo } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

type Props = {
    uri: string
    onPress?: () => void
    containerWidth?: number
    containerPaddingHorizontal?: number
    imgRadius?: number
}

const ItemImageSwiper = memo(({
    uri,
    onPress,
    containerWidth = Dimensions.get('screen').width,
    containerPaddingHorizontal = 10,
    imgRadius = 15
}: Props) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    width: containerWidth,
                    paddingHorizontal: containerPaddingHorizontal
                }
            ]}
            activeOpacity={1}
            onPress={onPress}
        >
            <FastImage
                style={[
                    styles.image,
                    { borderRadius: imgRadius }
                ]}
                source={{ uri: uri }}
                resizeMode={FastImage.resizeMode.cover}
            />
        </TouchableOpacity>
    )
})

export default ItemImageSwiper

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: '100%',
        height: '100%',
    }
})