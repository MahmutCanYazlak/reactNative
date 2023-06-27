import React from 'react'
import { GenericText, GenericView } from '@/assets/css'
import { dHeight, dWidth } from '@/constants';

interface Props {
    text: string;
    backgroundColor: string;
    color?: string;
    score: number;
}

const ScoreCard = ({backgroundColor, color, text, score}: Props) => {
  return (
    <GenericView width={dWidth*0.22} height={dHeight*0.088} backgroundColor={backgroundColor} padding={dWidth*0.01} borderRadius={10} >
      <GenericText color={color} fontSize={dWidth*0.08} bold textAlign={"center"}>{score}</GenericText>
      <GenericText color={color} fontSize={dWidth*0.04} textAlign={"center"} >{text}</GenericText>
    </GenericView>
  )
}

export default ScoreCard