import { Animated, StyleSheet, Text } from "react-native";
import ButtonIcon from "../../components/button/ButtonIcon";
import { memo } from "react";
import { THEME_COLOR } from "../../config/theme/theme-color";
import { ThemeMode } from "../../config/theme/theme-mode";

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
            <ButtonIcon
                nameIcon="bag-handle-outline"
                btnBorderWidth={1}
                btnBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                btnHeight={33}
                btnWidth={33}
                sizeIcon={16}
                elevationContainer={0}
                colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
            />
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