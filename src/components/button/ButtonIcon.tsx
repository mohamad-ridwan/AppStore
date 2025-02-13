import { GestureResponderEvent, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { PressableT } from "../../types/components/buttons";
import ContainerPressButton from "./ContainerPressButton";
import FastImage from "react-native-fast-image";

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
    onPress?: (event: GestureResponderEvent) => void
    renderImage?: 'icon' | 'image'
    imgUrl?: string
    imgRadius?: number
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
    pressableBgColor,
    onPress,
    renderImage = 'icon',
    imgUrl,
    imgRadius = 18 / 2
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
                onPress={onPress}
            >
                {renderImage === 'icon' ?
                    <Icon
                        name={nameIcon}
                        size={sizeIcon}
                        color={colorIcon}
                    /> :
                    renderImage === 'image' ?
                        <FastImage
                            source={{ uri: imgUrl }}
                            style={{
                                height: sizeIcon,
                                width: sizeIcon,
                                borderRadius: imgRadius
                            }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        : null
                }
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