import { GestureResponderEvent, PixelRatio, StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

type Props = {
    name: string
    borderRadius?: number
    onPress?: ((event: GestureResponderEvent) => void)
    isDisabled?: boolean
}

export default function BasicButton({
    name,
    borderRadius,
    onPress,
    isDisabled
}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[
                styles.touch,
                { borderRadius, opacity: isDisabled ? 0.5 : 1 }
            ]}
                activeOpacity={0.8}
                onPress={onPress}
                disabled={isDisabled}
            >
                <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10
    },
    touch: {
        backgroundColor: 'purple',
        borderRadius: 5,
        height: PixelRatio.roundToNearestPixel(45),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 500
    }
})