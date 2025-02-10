import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { THEME_COLOR } from "../../../config/theme/theme-color";

const Header = memo(() => {
    const navigation = useNavigation() as any

    function pressSeeAll(): void {
        navigation.navigate('AllProducts')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <TouchableOpacity activeOpacity={0.8} onPress={pressSeeAll}>
                <Text style={styles.btnText}>See all</Text>
            </TouchableOpacity>
        </View>
    )
})

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 600
    },
    btnText: {
        color: THEME_COLOR.PRIMARY_COLOR.green,
        fontSize: 12,
    }
})