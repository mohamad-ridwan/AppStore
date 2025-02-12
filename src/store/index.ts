import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import productsSlice from './products/productsSlice'
import cartSlice from './cart/cartSlice'

export const store = configureStore({
    reducer: {
        authSlice,
        productsSlice,
        cartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch