import { StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../../components/button/ButtonIcon";
import { memo } from "react";

const Header = memo(() => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover</Text>
            <ButtonIcon
                nameIcon="cart-outline"
                btnBorderWidth={1}
                btnBorderColor="#AAA"
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
        fontSize: 18,
        fontWeight: 'medium'
    }
})