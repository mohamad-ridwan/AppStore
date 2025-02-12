import { createSlice } from "@reduxjs/toolkit";
import { CartSliceT } from "../../types/store/cart/cartSlice";

export const cartSliceStateT: CartSliceT = {
    cart: {}
}

const cartSlice = createSlice({
    name: 'carts',
    initialState: cartSliceStateT,
    reducers: {}
})

export const { } = cartSlice.actions
export default cartSlice.reducer