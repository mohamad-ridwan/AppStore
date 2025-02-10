import { memo } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { ThemeMode } from "../../config/theme/theme-mode";
import Input from "../input";
import { THEME_COLOR } from "../../config/theme/theme-color";

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
                bgContainer={THEME_COLOR.PRIMARY_COLOR.gray}
                iconSize={18}
                colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
                topIcon={8}
                inputFontSize={13}
                heightInputWrapper={PixelRatio.roundToNearestPixel(35)}
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