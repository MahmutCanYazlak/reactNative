import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View><Text style={styles.box_1}>1</Text></View>
      <View><Text style={styles.box_2}>2</Text></View>
      <View><Text style={styles.box_3}>3</Text></View>
      <View><Text style={styles.box_4}>4</Text></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      backgroundColor:"white",
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between', //direction da verdiğimiz özelliğin yönünde sıralama yapar row sa x eksenine göre column sa y eksenine göre 
      alignItems:'center' ,//direction da verdiğimiz özelliğin tersi yönünde sıralama yapar row sa y eksenine göre column sa x eksenine göre 
      
    },
    box_1:(
      {
        width:75,
        height:75,
        backgroundColor:"red",
        textAlign:'center',

        

      }
    ), 
    box_2:(
      {
        width:75,
        height:75,
        backgroundColor:"blue",
        textAlign:'center'
      }
    ),
    box_3:(
      {
        width:75,
        height:75,
        backgroundColor:"green",
        textAlign:'center'

      }
    ),
    box_4:(
      {
        width:75,
        height:75,
        backgroundColor:"orange",
        textAlign:'center'

      }
    )
  }
)

export default App