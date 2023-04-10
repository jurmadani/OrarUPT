import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import { data } from "../AC-IS-Data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const materiiData = data.NUME_MATERII_ANUL2_AC_IS.MATERII;

const CursCard = ({ item, ora }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: "#40404040" },
      ]}
    >
      {/* Numele materiei */}
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: item.Profesor.length >= 11 ? 18 : 20,
          marginLeft: 15,
          marginTop: 12,
          justifyContent: "center",
        }}
      >
        {item.Materie} - Curs
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
          {item.Sala[0] === "A" ? "Corpul A Sala " + item.Sala : null}
          {item.Sala[0] === "B" ? "Corpul B Sala " + item.Sala : null}
          {item.Sala[0] === "D" ? "Corpul D Sala " + item.Sala : null}
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
          {item.Profesor}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // added flex property
    height: 170,
    width: windowWidth - 30,
    marginTop: 10,
    borderRadius: 16,
  },
});

export default CursCard;
