import React from "react";
import { SafeAreaView, StyleSheet,} from "react-native";
import Card from "./components/Card";//oluşturduğum custom Card Componentimi burda çağırmam gerekiyor ki onu kullanabiliyeim


function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Card title="E-Fatura" text="Kalem işlerinizi dijital platforma taşıyın!" />
      <Card title="E-İrsaliye" text="Sevkiyat süreçlerinizi hızlandırın!" />
      <Card title="E-Mütabakat" text="Evraklarınızı yeni teknolojiyle birleştirin!" />
      <Card title="E-Müstahsil" text="Defter tutan ve tutmayan üreticilere çözüm!" />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: "dimgrey  ",
      flex: 1,
    },
    
  }
)

export default App;