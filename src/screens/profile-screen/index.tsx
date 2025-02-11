import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../sections/profile/profile";
import { StyleSheet } from "react-native";
import { THEME_COLOR } from "../../config/theme/theme-color";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Profile />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME_COLOR.PRIMARY_COLOR.gray
    }
})