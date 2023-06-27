import React from "react";
import { TextInput, View } from "react-native";
import styles from "./SearchBar.styles";
const SearchBar=() :any=> {
    return(
<View style={styles.container}>
    <TextInput keyboardType="visible-password" placeholder="Ara..." onChangeText={(text)=>console.log(text)}/>
</View>

    )
}

export default SearchBar;
 