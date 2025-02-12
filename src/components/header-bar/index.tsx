import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";
import ButtonIcon from "../button/ButtonIcon";
import { THEME_COLOR } from "../../config/theme/theme-color";

type Props = {
    headerName?: string
    fontWeight?: number
}

const HeaderBar = memo(({
    headerName,
    fontWeight = 600
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
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={[
                    styles.headerTitle,
                    { fontWeight: fontWeight as 600 }
                ]}>{headerName}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
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
        flex: 0
    },
    headerTitle: {
        fontSize: 15 * PixelRatio.getFontScale(),
    }
})