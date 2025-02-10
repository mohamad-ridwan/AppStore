import { StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../../components/button/ButtonIcon";
import { memo } from "react";
import { THEME_COLOR } from "../../config/theme/theme-color";

const Header = memo(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover</Text>
            <ButtonIcon
                nameIcon="bag-handle-outline"
                btnBorderWidth={1}
                btnBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                btnHeight={33}
                btnWidth={33}
                sizeIcon={16}
                elevationContainer={0}
                colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
            />
        </View>
    )
})

export default Header

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: THEME_COLOR.SECONDARY_COLOR.darkGray
    }
})