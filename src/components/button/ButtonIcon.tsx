import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    nameIcon: string,
    btnHeight?: number
    btnWidth?: number
    btnRadius?: number
    btnBorderWidth?: number
    btnBorderColor?: string
    sizeIcon?: number
    colorIcon?: string
    elevationContainer?: number
}

export default function ButtonIcon({
    nameIcon,
    btnHeight = 35,
    btnWidth = 35,
    btnRadius = 35 / 2,
    btnBorderWidth,
    btnBorderColor = 'gray',
    sizeIcon = 18,
    colorIcon = 'gray',
    elevationContainer
}: Props) {
    return (
        <View style={[
            styles.container,
            {
                height: btnHeight,
                width: btnWidth,
                borderRadius: btnRadius,
                borderWidth: btnBorderWidth,
                borderColor: btnBorderColor,
                elevation: elevationContainer,
            }
        ]}>
            <TouchableOpacity style={styles.touch} activeOpacity={0.8}>
                <Icon
                    name={nameIcon}
                    size={sizeIcon}
                    color={colorIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden'
    },
    touch: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})