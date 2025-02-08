import { navigate } from "../../navigation/RootNavigation"
import { Token } from "../../types/store/auth/authSlice"
import { getAccessToken } from "../storage-management/auth/getAccessToken"
import { getAuthUser } from "../../store/auth/authAction"

export async function authentication(dispatch: any) {
    const accessToken = await getAccessToken()
    const token = accessToken as unknown
    if (!accessToken || (
        (token as Token)?.accessToken === undefined ||
        (token as Token)?.refreshToken === undefined
    )) {
        navigate('Login')
    }
    const user = await dispatch(getAuthUser({ token: (token as Token)?.accessToken as string }))
    if (user.payload?.username === undefined) {
        navigate('Login')
    }

    return user
}