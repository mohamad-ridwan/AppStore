import { memo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import FastImage from "react-native-fast-image";
import { UserState } from "../../../types/store/auth/authSlice";

type Props = {
    user: UserState
}

const Profile = memo(({
    user
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            <View style={styles.profileInfo}>
                <FastImage
                    source={{ uri: user?.image }}
                    style={styles.imgProfile}
                />
                <View style={styles.bio}>
                    <Text style={[
                        styles.name,
                        { color: backgroundStyle.color }
                    ]}>{user.username}</Text>
                    <Text style={[
                        styles.email,
                        { color: backgroundStyle.color }
                    ]}>{user.email}</Text>
                </View>
            </View>
        </View>
    )
})

export default Profile

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        padding: 10
    },
    imgProfile: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    },
    profileInfo: {
        flexDirection: 'row',
        gap: 10
    },
    bio: {
        gap: 5
    },
    name: {
        fontSize: 15 * PixelRatio.getFontScale(),
        fontWeight: 700
    },
    email: {
        fontSize: 12 * PixelRatio.getFontScale(),
        fontWeight: 'light'
    }
})