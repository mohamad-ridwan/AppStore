import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../sections/profile/profile";
import { ScrollView, StyleSheet, View } from "react-native";
import { THEME_COLOR } from "../../config/theme/theme-color";
import Header from "../../sections/profile/Header";
import AccountSetting from "../../sections/profile/account-settings";
import UseProfile from "../../hooks/UseProfile";

export default function ProfileScreen() {
    const {
        menuAccountSettings,
        userState,
        handleLogOut,
    } = UseProfile()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View>
                    <Header />
                    <Profile user={userState} />
                </View>
                <AccountSetting
                    menuAccountSettings={menuAccountSettings}
                    handleLogOut={handleLogOut}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: THEME_COLOR.PRIMARY_COLOR.gray,
    }
})