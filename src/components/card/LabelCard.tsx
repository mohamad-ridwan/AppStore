import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    icon?: string,
    sizeIcon?: number,
    colorIcon?: string
    label?: string
    labelFontSize?: number
    containerRadius?: number
    containerBgColor?: string
    labelColor?: string
    containerPaddingVertical?: number
    containerPaddingHorizontal?: number
    labelFontWeight?: any
    containerBorderWidth?: number
    containerBorderColor?: string
}

const LabelCard = memo(({
    icon,
    sizeIcon = 15,
    colorIcon = 'white',
    label,
    labelFontSize = 16,
    containerRadius = 13,
    containerBgColor = THEME_COLOR.PRIMARY_COLOR.green,
    labelColor = 'white',
    containerPaddingVertical = 6,
    containerPaddingHorizontal = 12,
    labelFontWeight = 500,
    containerBorderWidth,
    containerBorderColor
}: Props) => {
    return (
        <View style={[
            styles.container,
            {
                borderRadius: containerRadius,
                backgroundColor: containerBgColor,
                paddingVertical: containerPaddingVertical,
                paddingHorizontal: containerPaddingHorizontal,
                borderWidth: containerBorderWidth,
                borderColor: containerBorderColor
            }
        ]}>
            {icon &&
                <Icon
                    name={icon}
                    size={sizeIcon}
                    color={colorIcon}
                />
            }
            {label &&
                <Text style={[
                    styles.labelText,
                    {
                        fontSize: labelFontSize,
                        color: labelColor,
                        fontWeight: labelFontWeight
                    }
                ]}>{label}</Text>
            }
        </View>
    )
})

export default LabelCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    labelText: {
    }
})