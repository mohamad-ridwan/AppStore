import { createAsyncThunk } from "@reduxjs/toolkit"
import { authAPIURL } from "../../services/api/baseURL"
import { reqHeaders } from "../../services/api/reqHeaders"
import { ReqAuthUserT, ReqRefreshTokenT } from "../../types/store/auth/authAction"

export const refreshToken = createAsyncThunk(
    "refresh-token",
    async ({
        refreshToken,
        expiresInMins
    }: ReqRefreshTokenT, { rejectWithValue }) => {
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
            if (!response.ok) {
                return rejectWithValue(response.statusText)
            }
            const result = await response.json()
            if (result?.accessToken === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getAuthUser = createAsyncThunk(
    "auth-user",
    async ({ token }: ReqAuthUserT, { rejectWithValue }) => {
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
            if (result?.id === undefined) {
                return rejectWithValue(result)
            }
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)