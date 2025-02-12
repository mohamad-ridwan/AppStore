import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { PressableT } from "../../types/components/buttons";
import ContainerPressButton from "./ContainerPressButton";

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
    pressableType?: PressableT
    pressableBgColor?: string
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
    elevationContainer,
    pressableType = 'touchable',
    pressableBgColor
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
            <ContainerPressButton
                pressableType={pressableType}
                backgroundColor={pressableBgColor}
            >
                <Icon
                    name={nameIcon}
                    size={sizeIcon}
                    color={colorIcon}
                />
            </ContainerPressButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden'
    },
})