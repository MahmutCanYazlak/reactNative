import React from 'react'
import { colors, dHeight, dWidth } from '@/constants'
import { GenericImage, GenericText, GenericView } from '@/assets/css';
import Button from '@/components/Button';
import ScoreCard from '@/components/ScoreCard';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ScoreScreen = () => {

  const scoreData = useSelector((state: RootState) => state.exam.scoreData);

  return (
    <SafeAreaWrapper>
      <GenericView flex={1} backgroundColor={colors.primary}>
        <GenericView flex={3} center />
        <GenericView flex={8} borderRadius={15} backgroundColor={colors.white} marginLeft={dWidth * 0.07} marginRight={dWidth * 0.08}>
          <GenericView flex={3} justifyContent={"flex-end"} center marginBottom={dWidth * 0.10} >
            <GenericImage source={require('@/assets/img/good.png')} width={dWidth * 0.7} height={dWidth * 0.7} />
          </GenericView>
          <GenericView flex={2} center justifyContent={"flex-end"}  >
            <GenericText bold fontSize={dWidth * 0.07} color={colors.grayDark}>Sınav Sonucu</GenericText>
            <GenericText bold fontSize={dWidth * 0.10} color={colors.grayDark}>{scoreData.score}</GenericText>
          </GenericView>
          <GenericView flex={3} flexDirection={"row"} spaceAround alignItems={"center"} >
            <ScoreCard backgroundColor={colors.gray} score={15} color={colors.white} text={"Soru"} />
            <ScoreCard backgroundColor={colors.success} score={13} color={colors.white} text={"Doğru"} />
            <ScoreCard backgroundColor={colors.error} score={2} color={colors.white} text={"Yanlış"} />
          </GenericView>
          <GenericView flex={2} >
            {/* <Button text="Leaderboard" backgroundColor={colors.primary} textColor={colors.white} onPress={goLeaderBoard} /> */}
          </GenericView>
        </GenericView>
        <GenericView flex={1} />
      </GenericView>
    </SafeAreaWrapper>
  )
}
export default ScoreScreen;