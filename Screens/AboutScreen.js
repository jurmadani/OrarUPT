import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import SvgComponent from "../components/AboutSVG-Component";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Despre aplicatie
        </Text>
        {/* SVG de prezentare a aplicatiei */}
        <SvgComponent />
        {/* Text block 1 */}
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            width: windowWidth - 10,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Orar UPT</Text> este o aplicație
          mobilă dezvoltată pentru platformele Android și iOS, special creată
          pentru studenții de la Universitatea Politehnica din Timișoara.
        </Text>
        {/* Text block 2 */}
        <Text
          style={{
            fontSize: 13,
            alignSelf: "center",
            width: windowWidth - 10,
            marginLeft: 10,
            marginTop: 15,
          }}
        >
          Aceasta oferă o modalitate ușoară și convenabilă de a accesa orarul
          cursurilor, sălile de clasă și notificări în timp real. Cu o interfață
          intuitivă și un design modern, aplicația "Orar UPT" ajută studenții
          să-și gestioneze timpul într-un mod eficient și să nu rateze niciun
          curs important. "Orar UPT" este soluția ideală pentru studenții de la
          Universitatea Politehnica din Timișoara pentru a-și organiza programul
          de cursuri într-un mod eficient și comod.
        </Text>
        {/* Text block 3 */}
        <View style={{alignItems:'center'}}>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 10,
              marginTop: 10,
              color:'#BCC1CD'
            }}
          >
            Versiunea 1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
