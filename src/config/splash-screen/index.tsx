import { useEffect } from "react";
import { getAccessToken } from "../../services/storage-management/auth/getAccessToken";
import BootSplash from "react-native-bootsplash";

export default function ConfigSplashScreen() {
    useEffect(() => {
        const init = async () => {
            const accessToken = await getAccessToken()
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
        });
    }, []);

    return null
}