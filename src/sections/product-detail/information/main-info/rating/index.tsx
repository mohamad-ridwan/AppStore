import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import LabelCard from "../../../../../components/card/LabelCard";
import { THEME_COLOR } from "../../../../../config/theme/theme-color";

type Props = {
    rating?: number
    totalReviews?: number
}

const Rating = memo(({ rating, totalReviews }: Props) => {
    return (
        <>
            {rating &&
                <View style={styles.displayRating}>
                    <LabelCard
                        label={`${rating.toFixed(1)}`}
                        icon="star"
                        labelFontWeight={500}
                        containerRadius={20}
                        labelFontSize={13 * PixelRatio.getFontScale()}
                        containerBgColor="transparent"
                        colorIcon={THEME_COLOR.PRIMARY_COLOR.yellowStar}
                        labelColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                        containerBorderWidth={1}
                        containerBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    />
                    <LabelCard
                        label={'94%'}
                        icon="thumbs-up"
                        labelFontWeight={500}
                        containerRadius={20}
                        labelFontSize={13 * PixelRatio.getFontScale()}
                        containerBgColor="transparent"
                        colorIcon={THEME_COLOR.PRIMARY_COLOR.green}
                        labelColor={THEME_COLOR.SECONDARY_COLOR.darkGray}
                        containerBorderWidth={1}
                        containerBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    />
                    <Text style={styles.totalReviews}>{totalReviews} Reviews</Text>
                </View>
            }
        </>
    )
})

export default Rating

const styles = StyleSheet.create({
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