import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";
import Input from "../input";

const SearchBar = memo(() => {
    const { backgroundStyle } = ThemeMode()
    const theme = backgroundStyle.backgroundColor

    return (
        <View style={[
            styles.container,
            { backgroundColor: theme }
        ]}>
            <Input
                placeholder="Search"
                inputRadius={10}
                inputBorderWidth={0}
                icon="search-outline"
                bgContainer={'#EEE'}
                iconSize={20}
                topIcon={9}
                heightInputWrapper={PixelRatio.roundToNearestPixel(40)}
            />
        </View>
    )
})

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10
    }
})