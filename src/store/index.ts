import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import productsSlice from './products/productsSlice'

export const store = configureStore({
    reducer: {
        authSlice,
        productsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch