import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const ProfesorCard = ({ item, transparent,culoareCard }) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: transparent ? "#40404040" : culoareCard },
      ]}
    >
      <Text
        style={{
          marginLeft: 20,
          marginRight: 20,
          fontWeight: "bold",
          color: "white"
        }}
      >
        {item}
      </Text>
    </View>
  );
};

export default ProfesorCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    borderRadius: 16,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 60,
    justifyContent: "center",
  },
});
