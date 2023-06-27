import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ExamService } from '@/services/examService';
import { IAnsweredQuestion, IQuestion } from '@/types/dataTypes';


const getExamDataThunk = createAsyncThunk("exam/getExamData", async (id: number) => {

    let response = await ExamService.getExam(id);

    if (response?.data?.status === 200) {
        return response?.data?.data;
    }
    else {
        return Promise.reject(response);
    }
});

const setExamDataThunk = createAsyncThunk("exam/setExamData", async ({ data, navigation }: { data: any, navigation: any }) => {

    let response = await ExamService.setExam(data);

    if (response?.data?.status === 200) {
        let response = await ExamService.getScore(data.topicId);
        if (response?.data?.status === 200) {
            navigation.navigate("ScoreScreen");
            return response?.data?.data;
        }
        else {
            return Promise.reject(response);
        }
    }
    else {
        return Promise.reject(response);
    }
});




const examSlice = createSlice({
    name: "exam",
    initialState: {
        selectedOptionId: 0 as number,          // seçilen cevap idsi (0 ise seçili şık yok demektir)
        answers: [] as IAnsweredQuestion[], // cevaplar
        examStartTime: "",       // sınav başlama zamanı
        examDuration: 0 as number,     // sınav süresi
        examTopicId: 0 as number,        // sınavın konu idsi
        questionList: [] as IQuestion[],           // api den gelen sorular
        scoreData: {} as any,           // api den gelen skor bilgisi
        status: "idle",
    },
    reducers: {
        setSelectedOptionId: (state, action) => {
            state.selectedOptionId = action.payload;
        },
        setAnswers: (state, action) => {
            var obj = { questionId: action.payload, answerId: state.selectedOptionId };      // cevaplar arrayine eklenecek obje (questionId ve answerId) şeklinde
            state.answers.push(obj);                                                                    // cevaplar arrayine ekle objeyi 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getExamDataThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.examStartTime = action.payload?.startTime;
            state.examDuration = action.payload?.duration;
            state.examTopicId = action.payload?.topic_id;
            state.questionList = action.payload?.questionsList;

        });
        builder.addCase(setExamDataThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.scoreData = action.payload;
        });
    }
});


export const { setSelectedOptionId, setAnswers } = examSlice.actions;
export { getExamDataThunk, setExamDataThunk };

export default examSlice.reducer;