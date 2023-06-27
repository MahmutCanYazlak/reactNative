import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from "@/assets/css";
import { colors, dHeight, dWidth } from "@/constants";
import { IHomeCard } from "@/types/dataTypes";
import React from "react";


interface IHomeCardProps {
    navigation: any;
    card: IHomeCard;
}

const HomeCard = ({ navigation, card }: IHomeCardProps) => {

    const onCardPress = () => {
        navigation.navigate(card.screen);
    };
    return (
        <GenericTouchableOpacity
            onPress={onCardPress}
            flex={1}
            backgroundColor={colors.primaryLight}
            center
            margin={dWidth * 0.025}
            borderRadius={10}
            borderWidth={1}
            borderColor="#fff"
            padding={dWidth * 0.025} >
            <GenericView flex={1}>
                {/* <GenericImage resizeMode={"contain"} width={dWidth * 0.4} height={dHeight * 0.10} source={card.image} /> */}
            </GenericView>
            <GenericView flex={1} padding={dWidth * 0.013}>
                <GenericText bold color={colors.primaryDark}>{card.title}</GenericText>
            </GenericView>
        </GenericTouchableOpacity>
    );
}

export default HomeCard;