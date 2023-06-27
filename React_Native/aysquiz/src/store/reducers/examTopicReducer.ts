import { ExamTopicService } from '@/services/examTopicService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getExamTopicsThunk = createAsyncThunk("examTopic/getAll", async (id: number) => {

    let response = await ExamTopicService.getExamTopicsByCategoryId(id);

    if (response?.data?.status === 200) {
        console.log(response?.data?.data);
        return response?.data?.data;
    }
    else {
        return Promise.reject(response);
    }

});

const examTopicSlice = createSlice({
    name: "examTopic",
    initialState: {
        examTopics: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getExamTopicsThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.examTopics = action.payload;
        });
    }
});

export { getExamTopicsThunk };

export default examTopicSlice.reducer;