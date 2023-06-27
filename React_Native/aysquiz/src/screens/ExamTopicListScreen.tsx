import React, { useEffect } from "react";
import { FlatList } from "react-native";
import QuestionTopicCard from "@/components/QuestionTopicCard";
import { GenericView } from "@/assets/css";
import AppHeader from "@/components/shared/AppHeader";
import { IExamTopic } from "@/types/dataTypes";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { dWidth } from "@/constants";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { getExamTopicsThunk } from "@/store/reducers/examTopicReducer";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/AppStackNavigator";
import SafeAreaWrapper from "@/components/shared/SafeAreaWrapper";




type ExamTopicListScreenRouteProp = RouteProp<RootStackParamList, 'examTopicList'>;
interface Props {
    navigation: any;
    route: ExamTopicListScreenRouteProp;
}

const ExamTopicListScreen: React.FC<Props> = ({ route, navigation }) => {

    const dispatch = useDispatch<AppDispatch>();

    const questionTopics: IExamTopic[] = useSelector((state: RootState) => state.examTopic.examTopics || []);


    useEffect(() => {
        getExamTopics();
    }, []);

    const getExamTopics = () => {
        dispatch(getExamTopicsThunk(route.params.categoryId));
    }

    const onPressBack = () => {
        navigation.goBack();
    }

    const renderQuestionTopic = (item: IExamTopic) => (
        <QuestionTopicCard item={item} navigation={navigation} />
    );

    return (
        <SafeAreaWrapper>
            <GenericView flex={1}>
                <AppHeader back onPressBack={onPressBack} title={"Sınavlar"} />
                <GenericView flex={1} padding={dWidth * .02}  >
                    <FlatList
                        data={questionTopics}
                        renderItem={({ item }) => renderQuestionTopic(item)}
                        keyExtractor={(item) => item.id.toString()} />
                </GenericView>
            </GenericView>
        </SafeAreaWrapper>

    );
};
export default ExamTopicListScreen;