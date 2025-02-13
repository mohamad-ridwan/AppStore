import { memo } from "react";
import { ProductsCategoriesT } from "../../../types/store/products/productsSlice";
import { StyleSheet, Text, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import ButtonIcon from "../../../components/button/ButtonIcon";
import { THEME_COLOR } from "../../../config/theme/theme-color";

type Props = {
    productsCategoriesState: ProductsCategoriesT[]
}

const ListCategories = memo(({
    productsCategoriesState
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            {productsCategoriesState.map((item, key) => {
                return (
                    <View key={key} style={styles.category}>
                        <ButtonIcon
                            nameIcon=""
                            btnHeight={60}
                            btnWidth={60}
                            btnRadius={60 / 2}
                            renderImage="image"
                            imgUrl={item.img}
                            sizeIcon={40}
                            imgRadius={40 / 2}
                            btnBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                            btnBorderWidth={1}
                        />
                        <Text
                            style={styles.name}
                            numberOfLines={1}
                        >{item.name}</Text>
                    </View>
                )
            })}
        </View>
    )
})

export default ListCategories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    category: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    name: {
        maxWidth: 60,
        fontSize: 11
    }
})