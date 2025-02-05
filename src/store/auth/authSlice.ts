import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceT } from "../../types/store/auth/authSlice";
import { getAuthUser, loginUser, refreshToken } from "./authAction";

export const authSliceStateT: AuthSliceT = {
    user: {}
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authSliceStateT,
    reducers: {
        resetUser: (state, { payload }) => {
            state.user = {}
        },
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
        }),
            builder.addCase(loginUser.rejected, (state, action) => {
                state.user = {}
            }),
            builder.addCase(getAuthUser.fulfilled, (state, action) => {
                state.user = action.payload
            }),
            builder.addCase(getAuthUser.rejected, (state, action) => {
                state.user = {}
            }),
            builder.addCase(refreshToken.fulfilled, (state, action) => {
                state.user = {
                    ...state.user,
                    token: {
                        accessToken: action.payload.accessToken,
                        refreshToken: action.payload.refreshToken
                    }
                }
            }),
            builder.addCase(refreshToken.rejected, (state, action) => {
                state.user = {
                    ...state.user,
                    token: {}
                }
            })
    }
})

export const {
    resetUser
} = authSlice.actions
export default authSlice.reducer