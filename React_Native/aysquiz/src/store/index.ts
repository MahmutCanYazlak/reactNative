import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import loadingReducer from './reducers/loadingReducer';
import categoryReducer from './reducers/categoryReducer';
import examTopicReducer from './reducers/examTopicReducer';
import examReducer from './reducers/examReducer';
import profileReducers from './reducers/profileReducers';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
    category: categoryReducer,
    examTopic: examTopicReducer,
    exam: examReducer,
    profile: profileReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;