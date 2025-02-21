import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import { THEME_COLOR } from "../../../config/theme/theme-color";

type Props = {
    title: string
    brand?: string
}

const MainInfo = memo(({
    title,
    brand
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={styles.container}>
            <View style={styles.displayName}>
                <Text style={[
                    styles.productName,
                    { color: backgroundStyle.color }
                ]}>{title}</Text>
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
    displayName: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    productName: {
        fontSize: 20,
        fontWeight: 700,
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