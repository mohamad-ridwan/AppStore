import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import { THEME_COLOR } from "../../../config/theme/theme-color";
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
import { formatHelper } from "../../../helpers/format";
import LabelCard from "../../../components/card/LabelCard";

type Props = {
    title: string
    brand?: string
    price?: number
    discountPercentage?: number
    discountPrice?: string
    rating?: number
    totalReviews?: number
}

const { formatterCurrency } = formatHelper

const MainInfo = memo(({
    title,
    brand,
    price,
    discountPercentage,
    discountPrice,
    rating,
    totalReviews
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={styles.container}>
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
                        icon="pricetag-outline"
                        containerRadius={13}
                        labelFontSize={13 * PixelRatio.getFontScale()}
                        containerBgColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                    />
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
            </View>

            {rating &&
                <View style={styles.displayRating}>
                    <LabelCard
                        label={`${rating.toFixed(1)}`}
                        icon="star"
                        labelFontWeight={900}
                        containerRadius={20}
                        labelFontSize={13 * PixelRatio.getFontScale()}
                        containerBgColor="transparent"
                        colorIcon={THEME_COLOR.PRIMARY_COLOR.yellowStar}
                        labelColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                        containerBorderWidth={1}
                        containerBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    />
                    {/* <LabelCard
                        label={`${totalReviews  ?? ''}`}
                        icon="star"
                        labelFontWeight={900}
                        containerRadius={20}
                        labelFontSize={13 * PixelRatio.getFontScale()}
                        containerBgColor="transparent"
                        colorIcon={THEME_COLOR.PRIMARY_COLOR.yellowStar}
                        labelColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                        containerBorderWidth={1}
                        containerBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    /> */}
                    <Text style={styles.totalReviews}>{totalReviews} Reviews</Text>
                </View>
            }
        </View>
    )
})

export default MainInfo

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
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
    displayRating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
    },
    totalReviews: {
        fontSize: 12,
        color: THEME_COLOR.SECONDARY_COLOR.gray
    }
})