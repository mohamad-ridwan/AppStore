import { GestureResponderEvent, PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    title?: string
    onChangeText?: ((text: string) => void)
    value?: string
    placeholder?: string
    icon?: string
    colorIcon?: string
    handleClickIcon?: (event: GestureResponderEvent) => void
    secureTextEntry?: boolean
    desc?: string
    descColor?: string
    inputRadius?: number
    inputBorderWidth?: number
    bgContainer?: string
    iconSize?: number
    heightInputWrapper?: number
    topIcon?: number
    inputFontSize?: number
}

export default function Input({
    title,
    onChangeText,
    value,
    placeholder,
    icon,
    colorIcon,
    handleClickIcon,
    secureTextEntry,
    desc,
    descColor,
    inputRadius = 50,
    inputBorderWidth = 1,
    bgContainer,
    iconSize = 18,
    heightInputWrapper = PixelRatio.roundToNearestPixel(45),
    topIcon = 12,
    inputFontSize
}: Props) {
    return (
        <View>
            <View style={styles.container}>
                {title &&
                    <Text style={styles.title}>
                        {title}
                    </Text>
                }
                <View style={[
                    styles.inputWrapper,
                    {
                        borderRadius: inputRadius,
                        borderWidth: inputBorderWidth,
                        backgroundColor: bgContainer,
                        height: heightInputWrapper
                    }
                ]}>
                    <TextInput
                        placeholder={placeholder}
                        onChangeText={onChangeText}
                        value={value}
                        style={[
                            styles.input,
                            {
                                paddingRight: icon ? 20 : 5,
                                fontSize: inputFontSize,
                            }
                        ]}
                        secureTextEntry={secureTextEntry}
                    />
                    {icon &&
                        <TouchableOpacity style={[
                            styles.icon,
                            { top: topIcon }
                        ]} onPress={handleClickIcon} activeOpacity={0.8}>
                            <Icon
                                name={icon}
                                color={colorIcon}
                                size={iconSize}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {desc &&
                <Text style={[
                    styles.desc,
                    { color: descColor }
                ]}>
                    {desc}
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    desc: {
        fontSize: 12,
    },
    container: {
        gap: 7
    },
    title: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    inputWrapper: {
        paddingHorizontal: 10,
        borderColor: '#bbb',
        width: '100%',
        position: 'relative',
    },
    input: {
        paddingVertical: 5,
        height: '100%',
        paddingLeft: 5
    },
    icon: {
        position: 'absolute',
        right: 10,
    }
})