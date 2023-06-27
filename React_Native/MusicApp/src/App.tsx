import React from "react";
import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import music_data from "./music-data.json";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";


function App() {

  const renderSong = ({ item } : any) => <SongCard song={item}/>   
  const renderSeperator = ()=><View style={styles.seperator}/>
  return (
    <SafeAreaView style={styles.container}>
      
        <SearchBar/>
      
        <FlatList
          
          data={music_data}
          //renderItem={(item)=> eğer bu şekilde yaparsan aşağıda  <Text>{item.item.year}</Text> şeklinde verilere erişirsin ama
          //renderItem={({item})=> eğer bu şekild yaparsan aşağıda  <Text>{item.year}</Text> şeklinde erişirsin 
          //yani {} bu şekilde prop ları parçalarsın ve item data mız içinde ki he bir kümeye denk gelir
          renderItem={renderSong}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={renderSeperator}
        />
      
      
    </SafeAreaView>
  );
}
export default App;

  const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    seperator:{
     width:Dimensions.get("window").width,
     height:1,
     //borderRadius:1
      backgroundColor:"#e0e0e0e0"
    },

  }
);




