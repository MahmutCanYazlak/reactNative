import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

function App() {

  //todo: State dediğimiz şey : bizim component yapısı içierinde mantıksal oalrak saklamak istediğimiz ve bunları kullanacağımız gğncelleyeceğimiz değişkenlerdir.
  //!state tanımlarken-->stetimin adı, stetimi güncelleyeceğim fonksiyonun adı , bu statimin initial(ilk) değer, 
  //COUNTER::::counter değerine doğrudan yeni bir değer atayamıyorsun sebebi o hem const hemde useState den dönen counter readOnly dir onu doğrudan alıp kullanırsın
  //SETCOUNTER:: bu ise bir fonksiyon bir Dispatch fonksiyondur burdaki çalışma mantığı ise bizim belirlediğimiz state yeni bir değer atıyor içine ne gönderirsek counter değerinin yeni değeri o olacak yani setCounter ın içine ne yazarsak setCounter ı tanımladığımız yerdeki statein yeni değeri o olur
  //USESTATE::: state tanımlarken kullanırız ve bu bir hook fonksiyonudur ve reactın iç tarafından useState fonk. çağırıyorum 
  //ÇALIŞMA MANTIĞI:::useState diyoruz bu bize bir array dönderiyor biz bu arrayi parçalayarak kullanıyoruz 1.değişkenimin adı statemin adı 2.değerim bu state güncelleyeceğim özel bir fonksiyon



  const [counter, setCounter] = useState(0);

  function updateCounter() {
    setCounter(counter + 1);
  }
  return (
    <SafeAreaView>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="Arttir" onPress={updateCounter} />
      <Button title="Deneme" onPress={() => console.log(counter)} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
    text: {
      fontSize: 20,
    },
    button: {
      width: 15,
      height: 15,
      borderRadius: 50,
    }
  }
)

export default App;