import { createSlice } from "@reduxjs/toolkit";
import { CartSliceT } from "../../types/store/cart/cartSlice";
import { getCartByUser } from "./cartAction";

export const cartSliceStateT: CartSliceT = {
    cart: {}
}

const cartSlice = createSlice({
    name: 'carts',
    initialState: cartSliceStateT,
    reducers: {
        resetCart: (state) => {
            state.cart = {}
        }
    },
    extraReducers(builder) {
        builder.addCase(getCartByUser.fulfilled, (state, action) => {
            state.cart = action.payload
        }),
            builder.addCase(getCartByUser.rejected, (state) => {
                state.cart = {}
            })
    },
})

export const { resetCart } = cartSlice.actions
export default cartSlice.reducer