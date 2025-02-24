import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { AutoSizeText, ResizeTextMode } from "react-native-auto-size-text";
import { ThemeMode } from "../../../../../config/theme/theme-mode";
import { formatHelper } from "../../../../../helpers/format";
import LabelCard from "../../../../../components/card/LabelCard";
import { THEME_COLOR } from "../../../../../config/theme/theme-color";

type Props = {
    discountPrice?: string
    price?: number
    brand?: string
}

const { formatterCurrency } = formatHelper

const PriceSection = memo(({
    discountPrice,
    price,
    brand
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={styles.containerPrice}>
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
                    {discountPrice ? discountPrice : formatterCurrency('USD').format(price as number)}
                </AutoSizeText>
                {discountPrice &&
                    <AutoSizeText
                        fontSize={16}
                        numberOfLines={2}
                        mode={ResizeTextMode.max_lines}
                        style={[
                            styles.discountPrice,
                        ]}
                    >
                        {formatterCurrency('USD').format(price as number)}
                    </AutoSizeText>
                }
            </View>
            {brand &&
                <LabelCard
                    label={brand}
                    containerRadius={13}
                    labelColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                    labelFontSize={13 * PixelRatio.getFontScale()}
                    containerBgColor="transparent"
                    containerMarginTop={5}
                />
            }
        </View>
    )
})

export default PriceSection

const styles = StyleSheet.create({
    containerPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        flexWrap: 'wrap'
    },
    displayPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 5,
        flex: 1
    },
    normalPrice: {
        fontWeight: 700,
    },
    discountPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: THEME_COLOR.SECONDARY_COLOR.blurGray
    },
})