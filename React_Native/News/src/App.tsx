import { View, Text, FlatList, SafeAreaView, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import news_data from "./news_data.json"
import NewsCard from './components/NewsCard'
import news_banner_data from "./news_banner_data.json"

const App = () => {
  const renderNews = ({ item }: any) => <NewsCard news={item} />;//!renderItem ı bu şekilde dışarı taşıyarak  bu arrow funcution u örneğin 200 kere üretmek yerine 1 kere renderNews i tanımlıyor aşağıda bu renderNews i 200 kere çağormış oluyor böylece 200 kere fon. oluşturmak yerşne 200 kere fonk. çağırıyor yani içerde bir fonksiyon tanımlayacağına bu şekilde dışarıda tanımla içeride kullan
  const keyExtractorNews = (item: any) => ((item.u_id).toString())
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.headerText} >News</Text>
      <FlatList
      //listHeaderComponent list içerisnde header içerisinde göstereceğin yapıyı fonkisyon içinde veriyorsın
        ListHeaderComponent={() => (<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            news_banner_data.map((bannerNews => (<Image style={styles.banner_image} source={{ uri: bannerNews.imageUrl }} />)))
          }
        </ScrollView>)}
        keyExtractor={keyExtractorNews}//FlatList ekranda belli bir miktarda değer tutar bu değer tutmayı ise verilerin id sine göre yapar eğer verilerimiz de id diye bir değer varsa ordan alır ama verilerimizde id yoksa mesela u_id var biz bu u_id yi bu FlatList e belirtmemiz lazım belirme işlemini de keyExtractor ile yapıyoruz
        data={news_data}
        renderItem={renderNews}//bize burada data kısmında bir map yapısı döndüğü için doğrudan item diyip yazamıyoruz item title şeklinde yazdırıyoruz . 
      //{} sayesinde bir adım daha içeri giriyorsun mesela news_data sana bir dizi içinde veri veriyor ama sen {} içinde yazarak onun içinde ki değerlere erişiyorsun 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "#eceff1",
      flex: 1
    },
    banner_image: {
      height: Dimensions.get('window').height / 5,
      width: Dimensions.get('window').width / 2,
      borderRadius:15,
      
    },
    headerText :{
      fontSize:50,
      fontWeight:'bold',
      alignItems:'center',
      justifyContent:'center',
      color:"black"

    }
  }
)

export default App