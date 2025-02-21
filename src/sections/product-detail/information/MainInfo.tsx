import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import { THEME_COLOR } from "../../../config/theme/theme-color";
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

type Props = {
    title: string
    brand?: string
    price?: number
    discountPercentage?: number
}

const MainInfo = memo(({
    title,
    brand,
    price,
    discountPercentage
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={styles.container}>
            <View style={styles.displayPrice}>
                <AutoSizeText
                    fontSize={20}
                    numberOfLines={2}
                    mode={ResizeTextMode.max_lines}
                    style={[
                        styles.normalPrice,
                        { color: backgroundStyle.color }
                    ]}
                >
                    ${price}
                </AutoSizeText>
                {discountPercentage &&
                    <AutoSizeText
                        fontSize={16}
                        numberOfLines={2}
                        mode={ResizeTextMode.max_lines}
                        style={[
                            styles.discountPrice,
                        ]}
                    >
                        ${discountPercentage}
                    </AutoSizeText>
                }
            </View>
            <View style={styles.displayName}>
                <AutoSizeText
                    fontSize={16}
                    numberOfLines={2}
                    mode={ResizeTextMode.max_lines}
                    style={[
                        styles.productName,
                        { color: backgroundStyle.color }
                    ]}
                >
                    {title}
                </AutoSizeText>
                {brand && <Text style={[
                    styles.brand,
                    { color: THEME_COLOR.PRIMARY_COLOR.gray }
                ]}>{brand}</Text>}
            </View>
        </View>
    )
})

export default MainInfo

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    displayPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5
    },
    normalPrice: {
        fontWeight: 700,
    },
    discountPrice:{
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: THEME_COLOR.SECONDARY_COLOR.gray
    },
    displayName: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    productName: {
        fontWeight: 'normal',
        textAlign: 'left',
        flex: 1
    },
    brand: {
        fontSize: 13 * PixelRatio.getFontScale(),
        fontWeight: 500,
        backgroundColor: THEME_COLOR.SECONDARY_COLOR.darkGray,
        borderRadius: 13,
        paddingVertical: 6,
        paddingHorizontal: 12,
    }
})