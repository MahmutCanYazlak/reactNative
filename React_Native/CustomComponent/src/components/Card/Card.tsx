import React from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./Card.style" //style yapımı buraya import ediyoruz



const Card= (props : any) =>{
    return (
       
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.button_container} onPress={()=>Alert.alert("Ayssoft: " + props.title)}>
          <Text style={styles.button_text}>İNCELE</Text>
        </TouchableOpacity>
      </View>
      
    );
};



  export default Card;