import { FlatList, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeMode } from "../../config/theme/theme-mode";
import UseCategories from "../../hooks/UseCategories";

export default function CategoriesScreen() {
    const { backgroundStyle } = ThemeMode()
    const {
        renderItemCategoriesScreen,
        categoriesScreenDataElement
    } = UseCategories()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[
                styles.container,
                { backgroundColor: backgroundStyle.backgroundColor }
            ]}>
                <FlatList
                    data={categoriesScreenDataElement}
                    renderItem={renderItemCategoriesScreen}
                    keyExtractor={item => item.id}
                    maxToRenderPerBatch={3}
                    initialNumToRender={5}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})