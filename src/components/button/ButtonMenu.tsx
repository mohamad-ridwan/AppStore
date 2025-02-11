import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import { PlatformPressable } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    icon?: string
    sizeIcon?: number
    colorIcon?: string
    btnName: string
    splitIcon?: string
    nameFontSize?: number
    colorName?: string
    onPress?: (event: GestureResponderEvent)=>void
}

export default function ButtonMenu({
    icon,
    sizeIcon = 20,
    colorIcon = THEME_COLOR.SECONDARY_COLOR.darkGray,
    btnName,
    splitIcon,
    nameFontSize = 14,
    colorName = THEME_COLOR.SECONDARY_COLOR.darkGray,
    onPress
}: Props) {
    return (
        <PlatformPressable style={styles.container} onPress={onPress}>
            <View style={styles.btnInfo}>
                {icon &&
                    <Icon
                        name={icon}
                        size={sizeIcon}
                        color={colorIcon}
                    />
                }
                <Text style={[
                    styles.btnName,
                    { fontSize: nameFontSize, color: colorName }
                ]}>{btnName}</Text>
            </View>
            {splitIcon &&
                <Icon
                    name={splitIcon}
                    size={sizeIcon}
                    color={colorIcon}
                />
            }
        </PlatformPressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    btnInfo: {
        gap: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    btnName: {

    }
})