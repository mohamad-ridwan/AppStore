import { PixelRatio } from "react-native";
import BasicButton from "../../../../components/button";
import { Category } from "../../../../types/store/products/productsSlice";

type Props = {
    name: string
    slug: Category
    isActive: boolean
    handlePickCategory(slug: Category): void
}

export default function PickCategoryItem({
    name,
    slug,
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
            onPress={() => handlePickCategory(slug)}
        />
    )
}