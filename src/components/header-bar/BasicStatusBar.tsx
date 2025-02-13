import { memo } from "react";
import { StatusBar } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";

const BasicStatusBar = memo(() => {
    const { backgroundStyle, isDarkMode } = ThemeMode()
    return (
        <StatusBar
            animated={true}
            backgroundColor={backgroundStyle.backgroundColor}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            showHideTransition="slide"
            hidden={false}
        />
    )
})

export default BasicStatusBar