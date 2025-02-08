import { ActivityIndicator, GestureResponderEvent, PixelRatio, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

type Props = {
    name: string
    borderRadius?: number
    onPress?: ((event: GestureResponderEvent) => void)
    isDisabled?: boolean
    isLoading?: boolean
    loadingSize?: number | "small" | "large"
    loadingColor?: string
    widthContainer?: string | number
    touchPaddingVertical?: number
    touchPaddingHorizontal?: number
    fontSizeName?: number
    touchHeight?: number
    touchBgColor?: string
    touchBorderWidth?: number
    touchBorderColor?: string
    nameColor?: string
}

export default function BasicButton({
    name,
    borderRadius = 5,
    onPress,
    isDisabled,
    isLoading,
    loadingSize = 'small',
    loadingColor = '#fff',
    widthContainer = '100%',
    touchPaddingVertical,
    touchPaddingHorizontal,
    fontSizeName,
    touchHeight = PixelRatio.roundToNearestPixel(45),
    touchBgColor = 'purple',
    touchBorderWidth,
    touchBorderColor,
    nameColor = '#fff'
}: Props) {
    return (
        <View style={[
            styles.container,
            { width: widthContainer as '100%' }
        ]}>
            <TouchableOpacity style={[
                styles.touch,
                {
                    borderRadius,
                    opacity: isDisabled ? 0.5 : 1,
                    paddingVertical: touchPaddingVertical,
                    paddingHorizontal: touchPaddingHorizontal,
                    height: touchHeight,
                    backgroundColor: touchBgColor,
                    borderWidth: touchBorderWidth,
                    borderColor: touchBorderColor
                }
            ]}
                activeOpacity={0.8}
                onPress={onPress}
                disabled={isDisabled}
            >
                {isLoading ?
                    <View style={styles.loading}>
                        <ActivityIndicator size={loadingSize} color={loadingColor} />
                    </View>
                    :
                    <Text style={[
                        styles.text,
                        { fontSize: fontSizeName, color: nameColor }
                    ]}>{name}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    touch: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontWeight: 500
    },
    loading: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})