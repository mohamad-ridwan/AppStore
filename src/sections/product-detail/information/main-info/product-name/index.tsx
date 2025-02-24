import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { ThemeMode } from "../../../../../config/theme/theme-mode";

type Props = {
    title: string
}

const ProductName = memo(({ title }: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
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
        </View>
    )
})

export default ProductName

const styles = StyleSheet.create({
    displayName: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    productName: {
        fontWeight: 'light',
        textAlign: 'left',
        flex: 1
    },
})