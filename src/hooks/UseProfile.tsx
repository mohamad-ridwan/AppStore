import { createSelector } from "reselect"
import { RootState } from "../store"
import { shallowEqual, useSelector } from "react-redux"
import { UserState } from "../types/store/auth/authSlice"
import { MenuAccountSettingsT } from "../types/sections/profile"

export default function UseProfile() {
    const menuAccountSettings: MenuAccountSettingsT[] = [
        { name: 'Log Out', icon: 'log-out-outline' }
    ]

    const userSlice: any = createSelector(
        [(state: RootState) => state.authSlice],
        authSlice => {
            return authSlice.user
        }
    )
    const userState = useSelector(userSlice, shallowEqual) as UserState

    return {
        userState,
        menuAccountSettings
    }
}