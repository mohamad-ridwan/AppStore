import { navigate } from "../../navigation/RootNavigation"
import { Token } from "../../types/store/auth/authSlice"
import { getAccessToken } from "../storage-management/auth/getAccessToken"
import { getAuthUser, refreshToken } from "../../store/auth/authAction"
import { saveAccessToken } from "../storage-management/auth/saveAccessToken"

export async function authentication(dispatch: any) {
    const accessToken = await getAccessToken()
    const token = accessToken as unknown
    if (!accessToken || (
        (token as Token)?.accessToken === undefined ||
        (token as Token)?.refreshToken === undefined
    )) {
        navigate('Login')
        return 'no accessToken'
    }
    const user = await dispatch(getAuthUser({ token: (token as Token)?.accessToken as string }))
    if (user.payload?.username === undefined) {
        const getRefreshToken = await dispatch(refreshToken({
            refreshToken: (token as Token)?.refreshToken,
            expiresInMins: 30
        }))

        if(getRefreshToken.payload?.accessToken === undefined){
            navigate('Login')
            return user
        }
        await saveAccessToken(getRefreshToken.payload.accessToken, getRefreshToken.payload.refreshToken)
        return user
    }

    return user
}