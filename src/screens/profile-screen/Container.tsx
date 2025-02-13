import { memo, ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { THEME_COLOR } from "../../config/theme/theme-color";
import BasicStatusBar from "../../components/header-bar/BasicStatusBar";

type Props = {
    children: ReactNode
}

const Container = memo(({
    children
}: Props) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <BasicStatusBar />
                <ScrollView style={styles.scroll}>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
})

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        backgroundColor: THEME_COLOR.PRIMARY_COLOR.gray,
    }
})