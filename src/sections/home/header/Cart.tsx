import { memo, useMemo } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../../../components/button/ButtonIcon";
import { THEME_COLOR } from "../../../config/theme/theme-color";
import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { shallowEqual, useSelector } from "react-redux";
import { Cart, MainCartData } from "../../../types/store/cart/cartSlice";
import { ThemeMode } from "../../../config/theme/theme-mode";

const CartHeader = memo(() => {
    const { backgroundStyle } = ThemeMode()
    const cartlice: any = createSelector(
        [(state: RootState) => state.cartSlice],
        cartSlice => {
            return cartSlice.cart
        }
    )
    const cartState = useSelector(cartlice, shallowEqual) as MainCartData

    const totalProducts = useMemo((): number => {
        if ((cartState?.carts as Cart[])?.length > 0) {
            const data = (cartState.carts as Cart[]).find(item => item.userId === 6)
            if (!data) {
                return 0
            }
            return data.totalProducts
        }
        return 0
    }, [cartState])

    if (totalProducts === 0) {
        return null
    }

    return (
        <View style={[
            styles.container,
            { backgroundColor: backgroundStyle.backgroundColor }
        ]}>
            <View style={styles.displayTotalProducts}>
                <Text style={styles.totalProducts}>{totalProducts}</Text>
            </View>
            <ButtonIcon
                nameIcon="bag-handle-outline"
                btnBorderWidth={1}
                btnBorderColor={THEME_COLOR.PRIMARY_COLOR.gray}
                btnHeight={33}
                btnWidth={33}
                sizeIcon={16}
                elevationContainer={0}
                colorIcon={THEME_COLOR.SECONDARY_COLOR.darkGray}
            />
        </View>
    )
})

export default CartHeader

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    displayTotalProducts: {
        position: 'absolute',
        right: 0,
        top: -5,
        backgroundColor: THEME_COLOR.PRIMARY_COLOR.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: PixelRatio.roundToNearestPixel(16),
        width: PixelRatio.roundToNearestPixel(16),
        borderRadius: 16 / 2,
        zIndex: 1
    },
    totalProducts: {
        fontSize: 10,
        color: 'white'
    }
})