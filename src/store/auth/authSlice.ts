import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceT } from "../../types/store/auth/authSlice";
import { getAuthUser } from "./authAction";

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
        builder.addCase(getAuthUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const {
    resetUser
} = authSlice.actions
export default authSlice.reducer