import { createSelector } from "reselect"
import { useNavigation } from '@react-navigation/native';
import { RootState } from "../store"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { UserState } from "../types/store/auth/authSlice"
import { MenuAccountSettingsT } from "../types/sections/profile"
import { resetAccessToken } from "../services/storage-management/auth/resetAccessToken"
import { resetUser } from "../store/auth/authSlice";
import { useCallback } from "react";

const menuAccountSettings: MenuAccountSettingsT[] = [
    { name: 'Profile Info', icon: 'person-outline' },
    { name: 'Password & Security', icon: 'key-outline' },
    { name: 'Log Out', icon: 'log-out-outline' },
]

export default function UseProfile() {
    const dispatch = useDispatch() as any
    const navigation = useNavigation()

    const userSlice: any = createSelector(
        [(state: RootState) => state.authSlice],
        authSlice => {
            return authSlice.user
        }
    )
    const userState = useSelector(userSlice, shallowEqual) as UserState

    const handleLogOut = useCallback(async(): Promise<void>=> {
        await resetAccessToken()
        dispatch(resetUser())
        
        navigation.navigate('Login' as never)
    }, [])

    return {
        userState,
        menuAccountSettings,
        handleLogOut,
    }
}