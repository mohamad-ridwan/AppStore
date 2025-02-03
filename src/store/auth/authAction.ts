import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPIURL } from "../../services/api/baseURL"
import { reqRefreshTokenT } from "../../types/store/auth/authAction"
import { reqHeaders } from "../../services/api/reqHeaders"

export const refreshToken = createAsyncThunk(
    "refresh-token",
    async ({
        refreshToken,
        expiresInMins
    }: reqRefreshTokenT, { rejectWithValue }) => {
        try {
            const response = await fetch(`${authAPIURL}auth/refresh`,
                reqHeaders(
                    'POST',
                    {
                        "Content-Type": "application/json"
                    },
                    JSON.stringify({
                        refreshToken,
                        expiresInMins
                    }),
                    'include'
                )
            )
        } catch (error) {

        }
    }
)

export const getAuthUser = createAsyncThunk(
    "auth-user",
    async ({ token }: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${authAPIURL}auth/me`,
                reqHeaders(
                    'GET',
                    {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                ))
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response?.json()
            if (result?.id !== undefined) {
                return result
            }
            return rejectWithValue(result)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)