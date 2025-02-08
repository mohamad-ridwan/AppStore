import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { CategoryNamesT } from "../../../../types/sections/home";

type Props = {
    name: string
    type: CategoryNamesT
    isActive: boolean
    handlePickCategory(type: CategoryNamesT): void
}

export default function PickCategoryItem({
    name,
    type,
    isActive,
    handlePickCategory
}: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[
                styles.touch,
                {
                    backgroundColor: isActive ? 'green' : 'transparent',
                    borderColor: isActive ? 'green' : '#666'
                }
            ]}
                activeOpacity={0.8}
                onPress={() => handlePickCategory(type)}
            >
                <Text style={[
                    styles.btnName,
                    { color: isActive ? 'white' : 'black' }
                ]}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    touch: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 12,
        borderWidth: 2,
    },
    btnName: {
        fontSize: 12,
        fontWeight: 'medium'
    }
})