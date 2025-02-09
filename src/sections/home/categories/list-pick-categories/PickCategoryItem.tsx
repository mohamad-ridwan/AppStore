import { PixelRatio } from "react-native";
import { CategoryNamesT } from "../../../../types/sections/home";
import BasicButton from "../../../../components/button";

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
        <BasicButton
            name={name}
            widthContainer={'auto'}
            borderRadius={12}
            containerMarginTop={0}
            touchPaddingHorizontal={10}
            fontSizeName={12}
            touchHeight={PixelRatio.roundToNearestPixel(33)}
            touchBgColor={isActive ? 'green' : 'transparent'}
            touchBorderWidth={1.5}
            touchBorderColor={isActive ? 'green' : '#666'}
            nameColor={isActive ? 'white' : 'black'}
            onPress={() => handlePickCategory(type)}
        />
    )
}