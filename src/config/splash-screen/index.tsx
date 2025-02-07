import { useEffect } from "react";
import { getAccessToken } from "../../services/storage-management/auth/getAccessToken";
import BootSplash from "react-native-bootsplash";
import { navigate } from "../../navigation/RootNavigation";
import { Token } from "../../types/store/auth/authSlice";

export default function ConfigSplashScreen() {
    useEffect(() => {
        const init = async () => {
            const accessToken = await getAccessToken()
            const token = accessToken as unknown
            if(!accessToken || (
                (token as Token)?.accessToken === undefined ||
                (token as Token)?.refreshToken === undefined
            )){
                navigate('Login')
            }
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
        });
    }, []);
}