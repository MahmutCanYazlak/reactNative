import React from 'react'
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css'
import { colors, dHeight, dWidth } from '@/constants';
import Icon from './shared/Icons';
import { ICategory } from '@/types/dataTypes';
import choice from "@/assets/img/choice.png";

interface Props {
    category: ICategory,
    navigation: any,
    type: any
}

const CategoryCard = ({ category, navigation, type }: Props) => {

    const onCardPress = () => {
        navigation.navigate("examTopicList", { categoryId: category.id });
    };
    return (
        <GenericTouchableOpacity
            onPress={onCardPress}
            flex={1}
            margin={dWidth * 0.025}
            borderRadius={10}
            borderWidth={1}
            borderColor="#fff"
            padding={dHeight * 0.023}
            backgroundColor={colors.primaryLight}
            flexDirection={"row"}
            center>
            <GenericView flex={1} width={dWidth * 0.05} height={dWidth * 0.05} alignItems="flex-start" justifyContent={'center'}>
                <GenericImage resizeMode={"cover"} source={category.icon ? { uri: category.icon } : choice} borderRadius={100} width={dWidth * 0.10} height={dHeight * 0.05} />
            </GenericView>
            <GenericView flex={3} flexDirection={'row'} justifyContent='space-between'>
                <GenericText bold fontSize={dHeight * 0.02} color={colors.grayDark}>{category.title}</GenericText>
                <Icon name="chevron-right" size={dHeight * 0.03} color={colors.primaryDark} />
            </GenericView>
            <GenericView>
            </GenericView>
        </GenericTouchableOpacity>
    )
}
export default CategoryCard;