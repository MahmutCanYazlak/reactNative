import React from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const App = () => {

  function sayHello() {
    console.log("buton tetiklendi")
  }
  return (
    //property atarken string değerlerde {} ihtiyaç yok ama diğer değerler için {} kullanmalısın
    <SafeAreaView style={styles.container}>
      <View style={styles.container_up}>
        <Text>Hello World</Text>
        <Text>merhablar</Text>
        <Button
          title="React native deneme"
          onPress={sayHello /* burada sayHello() dersen fonskyionun dönderdiği değeri alırsın eğer ki fonskyiona paremetre göndereceksende onPress ={()=>sayHello("can")} şeklinde yazarsın*/}
          disabled={false}//kısa şekilde doğrudan adını yazıpta kullanabilirsin
          color="orange"
        />

      </View>
      <View style={styles.container_bottom}>
        <Text>Merhaba React Native</Text>
        
      </View>
      
      
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container_up:{
    backgroundColor:"red",
    margin:10,
    padding:15,
    borderRadius:15,
    flex:1,
    
  },
  container_bottom : {
    backgroundColor:"blue",
    margin:10,
    padding:15,
    borderRadius:15,
    flex:1

  },
  container:{
    backgroundColor:"white",
    margin:10,
    padding:15,
    borderRadius:15,
    flex:1,
    flexDirection:"row"
    //flex değerini row yapacaksan flexDirection ile ayarlayabilirsin
    //eğer flex kullanacakasan kullandığın yerin parentine de flex değeri geçmen gerek bu değerin ne olduğunu önemli değil negetif değer olmasın yeter
  }
  
})

export default App;