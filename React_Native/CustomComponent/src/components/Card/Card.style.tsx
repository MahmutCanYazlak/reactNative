import React from "react"
import { StyleSheet } from "react-native";

export default  StyleSheet.create( //tanımlarken doğrudan export ile dışa gönderdik 
    {
      container: {
        borderWidth: 1,
        borderColor: "dark",
        borderRadius: 10,
        backgroundColor: "#f47f1f",
        margin: 10,
      },
      body: {
        padding: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        marginBottom: 5
  
      },
      text: {
        margin: 10,
        marginTop: 5,
        fontSize: 18,
      },
      button_container: {
        height:40,
        alignItems: "center",
        backgroundColor:"#7d7d7d",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
      },
      button_text: {
        fontSize: 20,
        padding:5,
        fontWeight: "bold",
        color:"black",
      }
    }
  )