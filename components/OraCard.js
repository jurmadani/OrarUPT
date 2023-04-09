import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { data } from "../AC-IS-Data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const materiiData = data.NUME_MATERII_ANUL2_AC_IS.MATERII;
const prescurtari = {
  "Medii şi tehnologii de programare": "MTP",
  "Baze de date": "BD",
  "Securitatea informatiei": "SI",
  "Modelare, simulare şi elemente de identificare": "MSEI",
  "Tehnici de optimizare": "TO",
  "Sisteme bazate pe microprocesoare şi microcontrolere": "SBMM",
  Microeconomie: "Microeconomie",
};

const OraCard = ({ item, ora }) => {
  let dateDespreMaterie;
  materiiData.forEach((element) => {
    if (prescurtari[element.Nume] == item.Materie) {
      dateDespreMaterie = element;
    }
  });
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: dateDespreMaterie.CardBackground },
      ]}
    >
      {/* Numele materiei */}
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 24,
          marginLeft: 15,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        {item.Categorie === "Laborator"
          ? `${item.Materie} - laborator`
          : `${item.Materie} - seminar`}
      </Text>
      {/* Ora */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Images/components-images/CeasIcon.png")}
          style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 17,
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          {ora}
        </Text>
      </View>

      {/* Sala */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Images/components-images/SalaLocatieIcon.png")}
          style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 17,
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          {item.Sala[0] === "A"
            ? "Corpul A Sala " + item.Sala
            : "Corpul B Sala " + item.Sala}
        </Text>
      </View>
      {/* Profesor */}
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/Images/components-images/TeacherIcon.png")}
          style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 17,
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          {dateDespreMaterie.ProfesorCurs}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // added flex property
    height: 160,
    width: windowWidth - 30,
    backgroundColor: "#4DC591",
    marginTop: 10,
    borderRadius: 16,
  },
});

export default OraCard;
