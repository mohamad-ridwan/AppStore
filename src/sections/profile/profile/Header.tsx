import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";

const Header = memo(() => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={styles.wrapper}>
            <Text style={[
                styles.profileTitle,
                { color: backgroundStyle.color }
            ]}>Profile</Text>
        </View>
    )
})

export default Header

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    profileTitle: {
        fontSize: 16,
        fontWeight: 600
    }
})