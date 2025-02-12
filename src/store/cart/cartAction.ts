import { createAsyncThunk } from "@reduxjs/toolkit"
import { dummyJSON_API_URL } from "../../services/api/baseURL"
import { reqHeaders } from "../../services/api/reqHeaders"

export const getCartByUser = createAsyncThunk(
    "c",
    async (userId: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`${dummyJSON_API_URL}carts/user/${userId}`)
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response.json()
            if (result?.carts === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)