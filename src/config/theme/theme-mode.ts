import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function ThemeMode() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : '#FFF',
    };

    return {
        backgroundStyle,
        isDarkMode
    }
}