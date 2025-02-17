import { memo } from "react";
import { GestureResponderEvent, PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";
import ButtonIcon from "../button/ButtonIcon";
import { THEME_COLOR } from "../../config/theme/theme-color";
import { CenterBarT } from "../../types/components/header-bar";
import SearchBar from "../search/SearchBar";

type Props = {
    headerName?: string
    fontWeight?: number
    onBackPress?: (event: GestureResponderEvent) => void
    centerBarType?: CenterBarT,
    flexCenter?: number
    flexRight?: number
}

const HeaderBar = memo(({
    headerName,
    fontWeight = 600,
    onBackPress,
    centerBarType = 'title',
    flexCenter = 0,
    flexRight = 1
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            <View style={{ flex: 1 }}>
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
            <View style={{ flex: flexRight }}></View>
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
    }
})