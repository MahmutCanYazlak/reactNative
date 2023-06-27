import { AuthService } from '@/services/authService';
import { IUser } from '@/types/authTypes';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginThunk = createAsyncThunk("auth/login", async (payload: { user: IUser, navigation: any }) => {

    let response = await AuthService.login(payload.user);

    if (response?.data?.status === 200) {
        payload.navigation.navigate("home");
        return response?.data?.data?.token;
    }
    else {
        return Promise.reject(response);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: {},
        status: "idle",
    },
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload;
        });
    }
});

export const { logout } = authSlice.actions;
export { loginThunk };

export default authSlice.reducer;