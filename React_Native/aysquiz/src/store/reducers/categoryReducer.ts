
import { CategoryService } from '@/services/categoryService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getAllCategoriesThunk = createAsyncThunk("product/getAll", async () => {

    let response = await CategoryService.getAllCategories();

    if (response?.data?.status === 200) {
        console.log(response?.data?.data);
        return response?.data?.data;
    }
    else {
        return Promise.reject(response);
    }
});


const productSlice = createSlice({
    name: "product",
    initialState: {
        categories: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.categories = action.payload;
        });
    }
});

export { getAllCategoriesThunk };

export default productSlice.reducer;