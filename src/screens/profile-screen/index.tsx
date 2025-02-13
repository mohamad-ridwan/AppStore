import Profile from "../../sections/profile/profile";
import { View } from "react-native";
import Header from "../../sections/profile/Header";
import AccountSetting from "../../sections/profile/account-settings";
import UseProfile from "../../hooks/UseProfile";
import Container from "./Container";

export default function ProfileScreen() {
    const {
        menuAccountSettings,
        userState,
        handleLogOut,
    } = UseProfile()
    return (
        <Container>
            <View>
                <Header />
                <Profile user={userState} />
            </View>
            <AccountSetting
                menuAccountSettings={menuAccountSettings}
                handleLogOut={handleLogOut}
            />
        </Container>
    )
}