import { GenericText, GenericTouchableOpacity, GenericView } from "@/assets/css";
import { colors, dWidth } from "@/constants";
import { IAnswer } from "@/types/dataTypes";
import React from "react";

interface Props {
    answer: IAnswer;
    borderColor: string;
    disabled?: boolean;
    onPress: () => void;
}

const AnswerItem: React.FC<Props> = ({ answer, borderColor, disabled, onPress }) => {
    return (
        <GenericTouchableOpacity
            marginTop={10}
            width={dWidth}
            borderWidth={2}
            borderColor={borderColor}
            onPress={onPress}
            disabled={disabled}
            padding={dWidth * .01}
        >
            <GenericText color={colors.primary}>{answer.title}</GenericText>
        </GenericTouchableOpacity>
    );
}

export default AnswerItem; 