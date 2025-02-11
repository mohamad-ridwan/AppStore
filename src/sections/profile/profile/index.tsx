import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { THEME_COLOR } from "../../../config/theme/theme-color";
import { ThemeMode } from "../../../config/theme/theme-mode";
import Header from "./Header";
import FastImage from "react-native-fast-image";

const Profile = memo(() => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.wrapper,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            <Header />
            <View style={[
                styles.container,
                { backgroundColor: backgroundStyle.backgroundColor }
            ]}>
                <View>
                </View>
            </View>
        </View>
    )
})

export default Profile

const styles = StyleSheet.create({
    wrapper: {

    },
    container: {
        height: PixelRatio.roundToNearestPixel(180),
        padding: 10
    },
})