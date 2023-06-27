import { GenericImage, GenericText, GenericView } from "@/assets/css";
import { colors, dWidth } from "@/constants";
import { IAnswer, IQuestion } from "@/types/dataTypes";
import React, { useState } from "react";
import { FlatList } from "react-native";
import AnswerItem from "./AnswerItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { setSelectedOptionId } from "@/store/reducers/examReducer";

const QuestionItem = ({ item }: { item: IQuestion }) => {

    const dispatch = useDispatch<AppDispatch>();
    const selectedOptionId = useSelector((state: RootState) => state.exam.selectedOptionId);
    const answeredQuestion = useSelector((state: RootState) => state.exam.answers.find((answer) => answer.questionId === item.id) || null);     // bu soruya verilen cevap var mı kontrol ediliyor (varsa answeredQuestion'a atanıyor) yoksa null atanıyor.


    const setSelectedOption = (answer: IAnswer) => {
        dispatch(setSelectedOptionId(answer.id));
    };


    const renderFlatlistItem = ({ answer }: { answer: IAnswer }) => {
        return (
            <AnswerItem
                answer={answer}
                borderColor={answeredQuestion != null ? (answer.is_correct === 1 ? colors.success : answer.id === selectedOptionId ? colors.error : colors.black) : (answer.id === selectedOptionId ? colors.primary : colors.black)}
                onPress={() => setSelectedOption(answer)}
                disabled={answeredQuestion != null ? true : false}                                                 // eğer bu soruya verilen cevap varsa (answeredQuestion null değilse) cevap seçilemez oluyor.
            />
        );
    };
    return (
        <GenericView width={dWidth} padding={10}>
            {
                item.image != null && <GenericImage source={{ uri: item.image }} width={dWidth - 20} height={200} />
            }
            <GenericText color={colors.primary}>{item.title}</GenericText>
            <FlatList
                data={item.answers}
                renderItem={({ item }) => renderFlatlistItem({ answer: item })}
                keyExtractor={(item) => item.id.toString()}
            />
        </GenericView>
    );
}

export default QuestionItem; 