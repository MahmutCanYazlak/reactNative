//UseEffectin diğer bir kullanım ise bizim componentimiz doğar yaşar ve ölür (ölmekten kastı: ekrandan herhangi bir şekilde kaldırıldı yada reactin kendi yaşam hiyerarşisinden kaldırıldığını varsayalım o kaldırılma anında bir şeyleri tetiklemek istersek CleanUp fonksiyonu devreye giriyor. clean up temizleyici bir fonskiyon yani bu component ekrandan kaldırılıyor bir eventListener eklediysek herhangi birşey dinliyorsak onu ordan sen kaldırabilirsin anlamına geliyor)

import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

function cleanUp() {
    const [helloFlag, setHelloFlag] = useState(true);


    function updateFlag() {
        setHelloFlag(!helloFlag)
    }
    return (
        <SafeAreaView>
            <Text>Hello CleanUp</Text>
            <Button title="Up" onPress={updateFlag} color={"grey"} />
            { //condisyonel olarak ben bu hello componentini ekrana basacağım yani bir görünecek bir gizlenecek böyle bir yapı oalcak react ta condisyonel yapısı aşağıdaki gibi olur helloFlag true ise Hello yapım görünür olsun
            }
            {helloFlag && <Hello />}
        </SafeAreaView>
    );
}

export default cleanUp;



//ayrı bir component oluşturduk farklı bir dosyada oluşturup çağırıyormuşsun gibi 
function Hello() {
    //benim hello componentim oluştu ekrana düştü condisyonel olara ekranda gösterip gizledim ve şimdide ortadan kaldırmak istiyorum ordan kaldırmak için cleanUp fonksiyonu çalışır o fonksiyonda aşağıdaki gibidir useEffect tanımlıyorsun ama stae takibine boş bir array gönderiryorssun böylece herahngi bir state takip etmyeceği için bu hello comonenti ilk var olduğunda bir kere çalışmış olacak böyle yapma sebebi:herhangi bir stati takip etmiyor ve bir kerede olsa ekrana bir şeyler basıyor console.log çıktısı vveriyordu e haliyle ben boş bir array gönderirsem bir stati takip etmicek bir kere tetiklenecek ve gidecek ben burdan bunun oluşturulduğunu takiip edebilirim ben bu componenti ortadan kaldırısam cleanUp fonk. devere girecek cleanUp fonk ise şu şekilde çalışıyor: useEffectin içinde kendimiz bir fonk. oluşturmuşuk ya buna return diyerek bir fonksiyon oluşturursam işte bu fonksiyonda da benim componentim ortadan kaldırıldığında silindiği anda tetikleniyor
    useEffect(
        ()=>{
            console.log("Oluşturuldu")
            return ()=>{
                console.log("Kaldırıldı")
            }
        },
        []
    )
    return (
        <View style={{ backgroundColor: "aqua" }}>
            <Text style={{ fontSize: 25 }}>I'am Hello Component</Text>
        </View>
    );
}