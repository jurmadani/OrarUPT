import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategorieCurs = ({ tipCurs }) => {
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
          justifyContent:'center',
        }}
      >
        <View
          style={{
            height: 13,
            width: 13,
            backgroundColor: "red",
            borderRadius: 500,
            marginRight: 10,
          }}
        />
        <Text style={{ marginRight: 3 }}>{tipCurs}</Text>
      </View>
  );
};

export default CategorieCurs;
