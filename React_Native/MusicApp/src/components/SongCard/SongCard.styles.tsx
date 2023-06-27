import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container: {
            padding: 10,
            flexDirection: "row"
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50
        },
        inner_container: {
            padding: 10,
            flex: 1,
            justifyContent: "center",

        },
        title:
        {
            fontWeight: "bold",
            fontSize: 25,
        },
        info_container: {
            flexDirection: "row",
            alignItems: "center",
            flex:1

        },
        year: {
            marginLeft: 10,
            color: "grey",
            fontWeight: "bold",
            fontSize: 12
        },
        soldout_container: {
          
           
            borderWidth:1,
            borderRadius:5,
            borderColor:"red",
            
            
        },
        soldout_title:{
            color:"red",
            padding:3,
            fontSize:12

        },
        content_container:{
            flexDirection:"row",
            
        }
    }
)

