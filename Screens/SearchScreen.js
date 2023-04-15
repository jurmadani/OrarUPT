import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
import { SafeAreaView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Keyboard } from "react-native";
import { useState } from "react";
import SearchFilter from "../components/SearchFilter";

const windowWidth = Dimensions.get("window").width;

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  const SearchIcon = () => {
    return (
      <Image
        source={require("../assets/Images/components-images/SearchIcon.png")}
        style={{ width: 21, height: 21 }}
      />
    );
  };

  const CloseIcon = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          setSearchText("");
        }}
      >
        <Image
          source={require("../assets/Images/components-images/CloseIcon.png")}
          style={{ width: 19, height: 19, marginRight: 5 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* The searchbar  */}
      <View
        style={{
          borderWidth: 0,
          marginTop: 20,
          width: windowWidth - 50,
          height: 55,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#F4F4F4",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#BABABA",
        }}
      >
        <Input
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search"
          accessoryLeft={SearchIcon}
          accessoryRight={CloseIcon}
          style={{ backgroundColor: "transparent", borderWidth: 0 }}
        />
      </View>
      {/* SearchFilter */}
      <SearchFilter input={searchText}/>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginBottom:100,
  },
});
