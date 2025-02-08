import { ReactNode, useEffect } from "react";
import BootSplash from "react-native-bootsplash";
import { authentication } from "../../services/auth";
import { useDispatch } from "react-redux";

type Props = {
    children: ReactNode
}

export default function ConfigSplashScreen({children}: Props) {
    const dispatch = useDispatch() as any

    useEffect(() => {
        const init = async () => {
            return await authentication(dispatch)
        };

        init().finally(async () => {
            await BootSplash.hide({ fade: true });
        });
    }, []);

    return children
}