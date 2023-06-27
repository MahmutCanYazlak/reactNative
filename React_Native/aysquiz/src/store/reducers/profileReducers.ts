import { ProfileService } from "@/services/profileService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProfile } from '@/types/dataTypes';

const getProfileThunk = createAsyncThunk("profile/get", async () => {
    let response = await ProfileService.getProfile();

    if (response?.data?.status === 200) {
        console.log(response?.data?.data);
        return response?.data?.data;
    } else {
        return Promise.reject(response);
    }
}
);

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profileData: {} as IProfile,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProfileThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.profileData = action.payload;
        });
    }
});

export { getProfileThunk };

export default profileSlice.reducer; 
