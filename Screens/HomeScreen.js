import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { fabClasses } from "@mui/material";

const HomeScreen = () => {
  var { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text>hello {user?.email}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
