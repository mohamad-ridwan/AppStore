import { Fragment, memo } from "react";
import { ProductsCategoriesT } from "../../../types/store/products/productsSlice";
import { StyleSheet, View } from "react-native";
import { ThemeMode } from "../../../config/theme/theme-mode";
import CategoryCard from "../../../components/card/CategoryCard";

type Props = {
    productsCategoriesState: ProductsCategoriesT[]
    handleNavigate: (...params: any) => void
}

const ListCategories = memo(({
    productsCategoriesState,
    handleNavigate
}: Props) => {
    const { backgroundStyle } = ThemeMode()
    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            {productsCategoriesState.map((item, key) => {
                return (
                    <Fragment key={key}>
                        <CategoryCard
                            image={item?.img}
                            name={item.name}
                            onPress={() => handleNavigate('ProductsByCategory', { slug: item.slug })}
                        />
                    </Fragment>
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
})