import { useEffect } from "react";
import { getAccessToken } from "../../services/storage-management/auth/getAccessToken";
import BootSplash from "react-native-bootsplash";
import { navigate } from "../../navigation/RootNavigation";

export default function ConfigSplashScreen() {
    useEffect(() => {
        const init = async () => {
            const accessToken = await getAccessToken()
            if(!accessToken){
                navigate('Login')
            }
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
        });
    }, []);

    return null
}