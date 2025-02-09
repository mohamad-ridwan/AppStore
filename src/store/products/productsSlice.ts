import { createSlice } from "@reduxjs/toolkit";
import { ProductsSliceT } from "../../types/store/products/productsSlice";

export const productsSliceStateT: ProductsSliceT = {
    product: {},
    productsCategories: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState: productsSliceStateT,
    reducers: {

    },
    extraReducers(builder) { },
})

export const {

} = productsSlice.actions
export default productsSlice.reducer