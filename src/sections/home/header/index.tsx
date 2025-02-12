import { Animated, StyleSheet, Text } from "react-native";
import { memo } from "react";
import { THEME_COLOR } from "../../../config/theme/theme-color";
import { ThemeMode } from "../../../config/theme/theme-mode";
import CartHeader from "./Cart";

type Props = {
    backgroundColor: Animated.AnimatedInterpolation<string | number>
    borderColor: Animated.AnimatedInterpolation<string | number>
}

const Header = memo(({
    backgroundColor,
    borderColor
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <Animated.View style={[
            styles.container,
            {
                backgroundColor: backgroundColor,
                borderBottomWidth: 1,
                borderBottomColor: borderColor
            }
        ]}>
            <Text style={styles.title}>Discover</Text>
            <CartHeader />
        </Animated.View>
    )
})

export default Header

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: THEME_COLOR.SECONDARY_COLOR.darkGray
    }
})