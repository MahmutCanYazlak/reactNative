

//!USEEFFECT'İN TANIMI VE 1.KULLANIMI

import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";

//LifeCyle:bir component doğar yaşar ve sonlandırılır
//UseEffect: benim statim güncellendiği zaman component yapım yeniden yeniden ekrana basıyor işte bu state yapım güncellendiği zaman bir yan etki oluşsun başka bir yerdede değişiklik yapılsın istenildiği zaman kullanırız  useEffect iki amaçlı bir kullanımı var 1:state etki etmek 2:benim componentim ekrana basısıdğı anda birşey çalıştırmak yani componentim oluştuğunda bir yan etki oluşturmak örneğin benim componentim ekrana basılsın  ve basışdığı anda bir tane fonksiyon çalıştırsın ve bir daha o fonksiyon hiç bir şekilde çalıştırılmasın tek bir seferde çalıştırılsın ve o şekilde bırakılsın.
//useEffect tanımlarken iki parametre alır 1. si bir fonksiyon bu fonksiyonda neleri çalıltırmak istediğini yazarsın 2. hangi state takip edeceğini yazarsın mesela ben number satte arttırıldığında bir fonksiyon çalışmasını istiyorum 
//knot::: useEffect:-: benim her stateim güncellendiğinde componentim en başından tekrar oluşur bunu anlamak için kodumun göbeğine console.log ile render yazıp anladık ben şöyle bir şey yapmak istediğimde sadece x stateim güncellendiği zaman özel bir alanın çalışmasını istiyorsam o zaman useEffect kullanırım  

function App()
{
  const [number ,setNumber] = useState(0);
  const [counter ,setCounter] = useState(0);

  console.log("render");
  useEffect(()=>{
    console.log("number update")
  } , [number]);
  useEffect(()=>{
    console.log("counter update " + counter)
  } , [counter])
    
  function updateCounter()
  {
    //todo: NOT:: burada biz bu fonksiyonu çağırıp consolumuza baktığımız zaman state değerimiz ekranda güncelleniyor fakat conola güncel değer yazılmıyor fakaatttt useEffect içinde yazdığımız zaman güncel değeri yazılıyor bunun sebebi biz setNumber ile emir vermiyoruz haber yayıyoruz ve yola devam ediyoruz bu ne zaman güncellenrise o zaman useEffect fonskyionu tetiklenecek özetlersek useState haberi yayar burdaki state güncellenir güncellendikten sonra useeffect fonsksiyonu çalışmış olur  useEffect fonksiyonu state değeri güncellendikten sonra yapacak işlemlerimizde devreye girer 
    console.log("*****************************");
    console.log("1. counter value: "+counter);
    setCounter(counter+1);
    console.log("2. counter value: "+counter);
    console.log("*****************************");

  }
  return(
    <SafeAreaView>
      <Text>Merhaba LifeCyle</Text>
      <Text>Number: {number}</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Up!" onPress={() => setNumber(number+1)}/>
      <Button title="Update counter!" onPress={() => setCounter(counter+100)}/>
      <Button title="günceleme sırası" onPress={updateCounter}/>


    </SafeAreaView>
  );
}

export default App;