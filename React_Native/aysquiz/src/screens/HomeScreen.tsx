import { FlatList } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper'
import { homeCard } from '@/data/CardList'
import HomeCard from '@/components/HomeCard'
import AppHeader from '@/components/shared/AppHeader'
import { GenericView } from '@/assets/css'
import { IHomeCard } from '@/types/dataTypes'
import { AppDispatch } from '@/store'
import { useDispatch } from 'react-redux'
import { getProfileThunk } from '@/store/reducers/profileReducers'
import { dWidth } from '@/constants'

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const renderCard = ({ item }: { item: IHomeCard }) => { return <HomeCard navigation={navigation} card={item} /> }

  const goProfile = () => {
    dispatch(getProfileThunk());
    navigation.navigate('profile')
  }

  return (
    <SafeAreaWrapper>
      <AppHeader title="Anasayfa" right="account" onRightPress={goProfile} />
      <GenericView padding={dWidth * .02}>
        <FlatList
          data={homeCard}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </GenericView>
    </SafeAreaWrapper>
  )
}

export default HomeScreen