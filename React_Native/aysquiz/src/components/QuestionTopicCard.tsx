import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from "@/assets/css";
import { colors, dHeight, dWidth } from "@/constants";
import React from "react";
import Icon from "./shared/Icons";
import { IExamTopic } from "@/types/dataTypes";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "@/store";
import { getExamDataThunk } from "@/store/reducers/examReducer";
import choice from "@/assets/img/choice.png";


interface Props {
    item: IExamTopic,
    navigation: any
}

const QuestionTopicCard = ({ item, navigation }: Props) => {

    const dispatch = useDispatch<AppDispatch>();

    const onPress = () => {
        dispatch(getExamDataThunk(item.id));
        navigation.navigate('questionList');
    };

    return (
        <GenericTouchableOpacity
            onPress={onPress}
            margin={dWidth * 0.025}
            borderRadius={10}
            borderWidth={1}
            borderColor="#fff"
            padding={dHeight * 0.023}
            backgroundColor={colors.primaryLight}
            flexDirection={"row"}
            center>
            <GenericView flex={1} width={dWidth * 0.05} height={dWidth * 0.05} alignItems="flex-start" justifyContent={'center'}>
                <GenericImage resizeMode={"cover"} source={item.icon ? { uri: item.icon } : choice} borderRadius={100} width={dWidth * 0.10} height={dHeight * 0.05} />
            </GenericView>
            <GenericView flex={3} flexDirection={'row'} justifyContent='space-between'>
                <GenericText bold fontSize={dHeight * 0.02} color={colors.grayDark}>{item.title}</GenericText>
                <Icon name="chevron-right" size={dHeight * 0.03} color={colors.primaryDark} />
            </GenericView>
            <GenericView>
            </GenericView>
        </GenericTouchableOpacity>
    );
};
export default QuestionTopicCard;