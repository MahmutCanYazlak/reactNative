import { GenericText, GenericTouchableOpacity } from '@/assets/css'
import { dHeight, dWidth } from '@/constants';
import React from 'react'

interface Props {
    text: string;
    onPress: () => void;
    backgroundColor: string;
    textColor?: string;
}

const Button = ({ text, onPress, backgroundColor, textColor }: Props) => {
    return (
        <GenericTouchableOpacity
            backgroundColor={backgroundColor}
            alignItems={"center"}
            margin={dWidth*0.023}
            padding={dWidth*0.023}
            borderRadius={10}
            justifyContent={"center"}
            onPress={onPress}>
            <GenericText fontSize={dWidth*0.050} color={textColor} bold>{text}</GenericText>
        </GenericTouchableOpacity>
    )
}

export default Button;