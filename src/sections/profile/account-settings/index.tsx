import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import { MenuAccountSettingsT } from "../../../types/sections/profile";
import ButtonMenu from "../../../components/button/ButtonMenu";
import { THEME_COLOR } from "../../../config/theme/theme-color";

type Props = {
    menuAccountSettings: MenuAccountSettingsT[]
}

const AccountSetting = memo(({ menuAccountSettings }: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            <Text style={[
                styles.headerTitle,
                { color: backgroundStyle.color }
            ]}>Account Settings</Text>
            <View style={styles.menuAccountSettings}>
                {menuAccountSettings.map((item, key) => {
                    const colorName = item.name === 'Log Out' ? THEME_COLOR.PRIMARY_COLOR.danger : backgroundStyle.color
                    return (
                        <ButtonMenu
                            key={key}
                            btnName={item.name}
                            colorName={colorName}
                            icon={item.icon}
                            colorIcon={colorName}
                        />
                    )
                })}
            </View>
        </View>
    )
})

export default AccountSetting

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginTop: 10
    },
    headerTitle: {
        fontSize: 13,
        fontWeight: 'medium',
        paddingHorizontal: 10
    },
    menuAccountSettings: {
        marginTop: 10
    }
})