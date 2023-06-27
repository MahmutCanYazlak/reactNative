import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import { Route } from './route';
import HomeScreen from '@/screens/HomeScreen';
import QuestionListScreen from '@/screens/QuestionListScreen';
import ScoreScreen from '@/screens/ScoreScreen';
import CategoryListScreen from '@/screens/CategoryListScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import LeaderBoardScreen from '@/screens/LeaderBoardScreen';
import ExamTopicListScreen from '@/screens/ExamTopicListScreen';
import { StorageService } from '@/utils/storage';

export type RootStackParamList = {
    login: undefined;
    home: undefined;
    profile: undefined;
    productList: undefined;
    score: undefined;
    questionList: undefined;
    examTopicList: { categoryId: number };
    leader: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();




const AppStackNavigator = () => {

    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        let token = await StorageService.getItem("token");
        console.log("token", token);
        setToken(token);
    }

    return (
        <Stack.Navigator
            /* initialRouteName="AppStackNavigator" */
            screenOptions={{
                headerShown: false
            }}
        >
            {
                token === null ?
                    <>
                        <Stack.Screen name={"login"} component={LoginScreen} />
                        <Stack.Screen name={"home"} component={HomeScreen} />
                        <Stack.Screen name={"profile"} component={ProfileScreen} />
                        <Stack.Screen name={"productList"} component={CategoryListScreen} />
                        <Stack.Screen name={"score"} component={ScoreScreen} />
                        <Stack.Screen name={"questionList"} component={QuestionListScreen} />
                        <Stack.Screen name={"examTopicList"} component={ExamTopicListScreen} />
                        <Stack.Screen name={"leader"} component={LeaderBoardScreen} />
                    </>
                    :
                    <>
                        <Stack.Screen name={"home"} component={HomeScreen} />
                        <Stack.Screen name={"login"} component={LoginScreen} />
                        <Stack.Screen name={"profile"} component={ProfileScreen} />
                        <Stack.Screen name={"productList"} component={CategoryListScreen} />
                        <Stack.Screen name={"score"} component={ScoreScreen} />
                        <Stack.Screen name={"questionList"} component={QuestionListScreen} />
                        <Stack.Screen name={"examTopicList"} component={ExamTopicListScreen} />
                        <Stack.Screen name={"leader"} component={LeaderBoardScreen} />
                    </>
            }





        </Stack.Navigator>
    );
};

export default AppStackNavigator;