import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategorieCurs = ({ tipCurs }) => {
  var bulinaColor;
  if (tipCurs === "Curs") {
    bulinaColor = "#4A4A4A";
  } else if (tipCurs === "Laborator") {
    bulinaColor = "red";
  } else bulinaColor = "#701A75";

  return (
    <View
      style={{
        backgroundColor: "white",
        width: 100,
        height: 24,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 13,
          width: 13,
          backgroundColor: bulinaColor,
          borderRadius: 500,
          marginRight: 10,
        }}
      />
      <Text style={{ marginRight: 3 }}>{tipCurs}</Text>
    </View>
  );
};

export default CategorieCurs;
