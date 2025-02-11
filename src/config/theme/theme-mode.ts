import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { THEME_COLOR } from "./theme-color";

export function ThemeMode() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : '#FFF',
        color: isDarkMode ? Colors.darker : THEME_COLOR.SECONDARY_COLOR.darkGray
    };

    return {
        backgroundStyle,
        isDarkMode
    }
}