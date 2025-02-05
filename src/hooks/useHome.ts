import { useEffect } from "react";
import { BackHandler } from "react-native";

export function useHome() {
    useEffect(() => {
        const backAction = () => {
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [])

    return {}
}