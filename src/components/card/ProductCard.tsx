import { StyleSheet, Text, View } from "react-native";
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    name?: string
    icon?: string
    colorIcon?: string
    iconSize?: number
    rate?: string
    price?: string
    heightImg?: string | number
    widthImg?: string | number
    maxHeightImg?: string | number
    imgRadius?: number
    colorName?: string
    nameFontSize?: number
    gapContainer?: number
    priceFontSize?: number
    priceFontWeight?: number | string
    nameNumberOfLines?: number
    nameWidth?: string | number
    imgUrl?: string
    imgBgColor?: string
    priceColor?: string
    rateColor?: string
}

export default function ProductCard({
    name,
    icon,
    colorIcon,
    iconSize,
    rate,
    price,
    heightImg = 100,
    widthImg = 'auto',
    maxHeightImg = 200,
    imgRadius = 13,
    colorName = 'gray',
    nameFontSize = 13,
    gapContainer = 5,
    priceFontSize = 14,
    priceFontWeight = 600,
    nameNumberOfLines,
    nameWidth,
    imgUrl,
    imgBgColor,
    rateColor = THEME_COLOR.SECONDARY_COLOR.darkGray,
    priceColor = THEME_COLOR.SECONDARY_COLOR.darkGray
}: Props) {
    return (
        <View style={[
            styles.container,
            {
                gap: gapContainer
            }
        ]}>
            <FastImage
                style={[
                    styles.img,
                    {
                        height: heightImg as number,
                        width: widthImg as '100%',
                        maxHeight: maxHeightImg as '100%',
                        borderRadius: imgRadius,
                        backgroundColor: imgBgColor
                    }
                ]}
                source={{
                    uri: imgUrl,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            <View>
                <View style={styles.nameInfo}>
                    <Text style={[
                        {
                            color: colorName,
                            fontSize: nameFontSize,
                            width: nameWidth as number
                        }
                    ]}
                        numberOfLines={nameNumberOfLines}
                    >{name}</Text>
                    <View style={styles.rating}>
                        {icon &&
                            <Icon
                                name={icon}
                                color={colorIcon}
                                size={iconSize}
                            />
                        }
                        {rate &&
                            <Text style={[
                                styles.rateText,
                                { color: rateColor }
                            ]}>{rate}</Text>
                        }
                    </View>
                </View>
                <Text style={[
                    styles.price,
                    {
                        fontSize: priceFontSize,
                        fontWeight: priceFontWeight as 600,
                        color: priceColor
                    }
                ]}>{price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '48%'
    },
    img: {
    },
    nameInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    rateText: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    price: {
    }
})