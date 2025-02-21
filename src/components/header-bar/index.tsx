import { memo } from "react";
import { GestureResponderEvent, PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";
import ButtonIcon from "../button/ButtonIcon";
import { THEME_COLOR } from "../../config/theme/theme-color";
import { CenterBarT } from "../../types/components/header-bar";
import SearchBar from "../search/SearchBar";
import CartHeader from "../card/Cart";

type Props = {
    headerName?: string
    fontWeight?: number
    onBackPress?: (event: GestureResponderEvent) => void
    centerBarType?: CenterBarT,
    flexLeft?: number
    flexCenter?: number
    flexRight?: number
    bgContainer?: string
    dataIcons?: string[]
}

const HeaderBar = memo(({
    headerName,
    fontWeight = 600,
    onBackPress,
    centerBarType = 'title',
    flexLeft = 1,
    flexCenter = 1,
    flexRight = 1,
    bgContainer,
    dataIcons
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: bgContainer ?? backgroundStyle.backgroundColor }
        ]}>
            <View style={{ flex: flexLeft }}>
                <ButtonIcon
                    nameIcon="arrow-back-outline"
                    pressableType="platform-pressable"
                    pressableBgColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
                    onPress={onBackPress}
                />
            </View>
            <View style={[
                styles.titleContainer,
                { flex: flexCenter }
            ]}>
                {centerBarType === 'title' ?
                    <Text style={[
                        styles.headerTitle,
                        {
                            flex: flexCenter,
                            fontWeight: fontWeight as 600
                        }
                    ]}>{headerName}</Text>
                    :
                    centerBarType === 'search' ?
                        <SearchBar />
                        : null
                }
            </View>
            <View style={[
                styles.rightContent,
                { flex: flexRight }
            ]}>
                {dataIcons?.map((icon, index) => (
                    <ButtonIcon
                        key={index}
                        nameIcon={icon}
                        pressableType="platform-pressable"
                        colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
                        btnBorderWidth={1}
                        btnBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                    />
                ))}
                <CartHeader 
                    pressableType="platform-pressable" 
                />
            </View>
        </View>
    )
})

export default HeaderBar

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    titleContainer: {
    },
    headerTitle: {
        fontSize: 15 * PixelRatio.getFontScale(),
        marginTop: 5
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'flex-end'
    }
})