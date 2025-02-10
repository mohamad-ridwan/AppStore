import { createAsyncThunk } from "@reduxjs/toolkit"
import { dummyJSON_API_URL } from "../../services/api/baseURL"
import { reqHeaders } from "../../services/api/reqHeaders"
import { Category } from "../../types/store/products/productsSlice"

export const productsByCategory = createAsyncThunk(
    "products-by-categories",
    async (category: Category, { rejectWithValue }) => {
        try {
            const response = await fetch(`${dummyJSON_API_URL}products/category/${category}`, reqHeaders('GET'))
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response.json()
            if (result?.products === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const productsCategories = createAsyncThunk(
    "products-categories",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${dummyJSON_API_URL}products/categories`, reqHeaders('GET'))
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response.json()
            if (result?.length === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const products = createAsyncThunk(
    "products",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${dummyJSON_API_URL}products`, reqHeaders('GET'))
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response.json()
            if (result?.products === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)