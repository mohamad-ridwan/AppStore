import { memo, ReactNode } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeMode } from "../../config/theme/theme-mode";

type Props = {
    children: ReactNode
}

const Container = memo(({ children }: Props) => {
    const { backgroundStyle } = ThemeMode()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[
                styles.container,
                { backgroundColor: backgroundStyle.backgroundColor }
            ]}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
})

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})