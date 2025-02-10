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
        addProduct: (state, { payload }) => {
            state.product = payload
        },
        addProductsCategories: (state, { payload }) => {
            state.productsCategories = payload
        }
    },
    extraReducers(builder) { },
})

export const {
    addProduct,
    addProductsCategories
} = productsSlice.actions
export default productsSlice.reducer