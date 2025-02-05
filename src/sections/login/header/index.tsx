import { StyleSheet, Text, View } from "react-native"

export default function LoginHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome back
            </Text>
            <Text style={styles.desc}>
                Use your credentials below and login to your account
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    title: {
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    desc: {
        color: '#888',
        fontSize: 14,
        fontWeight: 300,
        textAlign: 'center'
    }
})