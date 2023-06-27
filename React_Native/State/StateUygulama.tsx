import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Switch, Text, View } from "react-native"
const data = [
    { id: 0, name: "e-fatura", isActive: true },
    { id: 1, name: "e-arşiv", isActive: false },
    { id: 2, name: "e-irsaliye", isActive: false },
    { id: 3, name: "e-smm", isActive: true },
    { id: 4, name: "e-defter", isActive: false },
    { id: 5, name: "e-mm", isActive: true },

];
function StateUygulama() {
    //bu uygulamada iki tane state değeri var birtane switchin boolean değeri biride listenin kendisi
    const [urunList, setCafeList] = useState(data);
    const [showOnlyFavorite,setShowOnlyFavorite] = useState(false);

    function onActiveChange(isActiveSelected : any){
        setShowOnlyFavorite(isActiveSelected);
        isActiveSelected ?
        setCafeList(urunList.filter(urun=>urun.isActive)) : setCafeList(data);
    }

    return (
        <SafeAreaView>
           <View style={{marginStart:20 , alignItems:"flex-start"}}>
                <Text>show only active</Text>
                <Switch value={showOnlyFavorite} onValueChange={onActiveChange}/>
                  
                
           
           </View>
            <FlatList
                data={urunList}
                renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
                
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create(
    {
        text: {
            fontSize: 20,
        }
    }
)

export default StateUygulama;