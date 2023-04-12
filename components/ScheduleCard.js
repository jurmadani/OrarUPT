import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CategorieCurs from "./CategorieCurs";
import { useNavigation } from "@react-navigation/native";
import { data } from "../AC-IS-Data";

const ScheduleCard = ({ item, ora, esteCurs }) => {
  const [oraIncepereCurs, oraTerminareCurs] = ora.split("-");
  const prescurtariMaterii = {
    MTP: "Medii şi tehnologii de programare",
    BD: "Baze de date",
    SI: "Securitatea informatiei",
    MSEI: "Modelare, simulare şi elemente de identificare",
    TO: "Tehnici de optimizare",
    SBMM: "Sisteme bazate pe microprocesoare şi microcontrolere",
    Microeconomie: "Microeconomie",
  };

  let dataMaterieSuplimentara;
  data.NUME_MATERII_ANUL2_AC_IS.MATERII.forEach((element) => {
    if (esteCurs) {
      if (element.Nume === item.Materie) dataMaterieSuplimentara = element;
    } else if (element.Nume === prescurtariMaterii[item.Materie])
      dataMaterieSuplimentara = element;
  });
  


  return (
    <View style={styles.container}>
      {/* View-ul principal */}
      <View style={{ flexDirection: "row" }}>
        {/* View-ul cu ora */}
        <View>
          <Text style={[styles.oraStyle, { fontSize: 19 }]}>
            {oraIncepereCurs}
          </Text>
          <Text style={[styles.oraStyle, { color: "#BCC1CD", fontSize: 16 }]}>
            {oraTerminareCurs}
          </Text>
        </View>
        {/* Bara alba de langa ora */}
        <View
          style={{
            backgroundColor: "white",
            width: 2,
            height: 180,
            marginLeft: 10,
            marginTop: 10,
          }}
        />
        {/* Card-ul cu cursul */}
        <View
          style={{
            width: 260,
            height: 171,
            backgroundColor: "#393C98",
            marginLeft: 22,
            marginTop: 10,
            borderRadius: 16,
            shadowColor: "#171717",
            shadowOffset: { width: 2, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
          }}
        >
          {/* Numele cursului */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                marginLeft: 20,
                marginTop: 10,
                height: 500,
              }}
            >
              {item.Materie}
            </Text>
          </View>
          {/* Sala + icon */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../assets/Images/components-images/SalaLocatieIcon-2.png")}
              style={{
                height: 25,
                width: 25,
                marginLeft: 10,
                marginTop: 20,
                tintColor: "white",
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 17,
                marginLeft: 15,
                marginTop: 20,
              }}
            >
              {item.Sala[0] === "A" ? "Corpul A Sala " + item.Sala : null}
              {item.Sala[0] === "B" ? "Corpul B Sala " + item.Sala : null}
              {item.Sala[0] === "D" ? "Corpul D Sala " + item.Sala : null}
              {item.Sala[0] != 'A' && item.Sala[0] != 'B' && item.Sala[0] !='D' ? item.Sala : null}
            </Text>
          </View>
          {/* Profesor */}
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Images/components-images/ProfessorIcon-2.png")}
              style={{
                height: 25,
                width: 25,
                marginLeft: 10,
                marginTop: 10,
                tintColor: "white",
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 17,
                marginLeft: 15,
                marginTop: 10,
                width:200,
              }}
            >
              {esteCurs ? item.Profesor : dataMaterieSuplimentara.ProfesoriLaborator[0]}
            </Text>
          </View>
          {/* Card-ul de categorie (seminar,curs,laborator) */}
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              margin: 5,
            }}
          >
            <CategorieCurs tipCurs={esteCurs ? "Curs" : item.Categorie} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  oraStyle: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
});
