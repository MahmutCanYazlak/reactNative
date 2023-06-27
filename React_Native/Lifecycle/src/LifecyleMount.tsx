//!USEEFFECT 2.KULLANIMI

//UseEffect in 2.kullanım alanı ise componentim mount olduğu anda belli fonskiyonları çalıştırmak için de kullanabiliriz yani benim componentim bir yerden veri çeksin yada başka bir componente veri göndersin gibi işlemleri gerçekleştirebilirim. Bunu şu şekilde yapacağz: Ben yine useEffect i kullanacam fakat herhangi bir state takip etemeyeceğim yani useEffectin 2.parametresine herhangibir değer vermeyeceğim bu bana şu şekilde bir olanak sağlicak useEfect oluşuyor tek bir kerede olsa tetikleniyor ama hiçbir stati takip etmediği için başka bir state güncellemesinde de yeni bir render daha çalışmamış oluyor  


import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native"

function lifecyleMount() {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log("number updated: " + number);
    },
    [number]);

    useEffect(
        //useEfectin mount özelliğinin bize sağlamış olduğu avantaj şu ben bu componenti ekrana bastığımda belki bir yerden veri çekecem veri çekme işlmelerini biz useStatin mounting evrsseinde gerçekleştiririz çünkü benim componentim ekrana basıalacak ekranda ben bir kere görecemen azından componentimin mount olduğunu ondan sonra bir veri çekmw işlemi gerçekleştirecem bana veriler gelecek veriler geldiğinde ben bunları ekrana bir şekilde basıyor olacam 
        //[]--->1 kere çalışır
        //[.x.] -->x değeri güncellendikçe çalışır
        // hiç yazmazsan her seferinde güncellenir

        () => {console.log("Mounting....") },
        []
    );

    function updateCounter() {
        setNumber(number + 1);
    }
    return (
        <SafeAreaView style={{
            margin: 15
        }}>
            <Text style={{ fontSize: 25, marginBottom: 10 }}>Hello useEffect mount</Text>
            <Text style={{ fontSize: 25 }}>number:{number}</Text>
            <Button title="Up" onPress={updateCounter} />
        </SafeAreaView>

    );
}
export default lifecyleMount;