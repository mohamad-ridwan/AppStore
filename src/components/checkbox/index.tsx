import React from "react";
import { View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
    label?: string
    size?: number
    isChecked?: boolean
    onPress: (isChecked: boolean) => void
}

export default function Checkbox({
    label,
    size = 18,
    isChecked,
    onPress
}: Props) {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                isChecked={isChecked}
                size={size}
                fillColor="green"
                unFillColor="transparent"
                text={label}
                iconStyle={{ borderColor: "red", borderRadius: 5 }}
                innerIconStyle={{ borderWidth: 1.5, borderRadius: 5 }}
                textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: 'none', fontSize: 13, color: 'black', marginLeft: -8 }}
                onPress={(isChecked: boolean) => onPress(isChecked)}
                style={styles.checkbox}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 5
    },
    checkbox: {

    }
})