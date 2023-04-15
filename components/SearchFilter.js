import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { data } from "../AC-IS-Data";
import { useNavigation } from "@react-navigation/native";

const SearchFilter = ({ input }) => {
  const materiiData = data.NUME_MATERII_ANUL2_AC_IS.MATERII;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={materiiData}
        renderItem={({ item }) => {
          /* If the user didn't put any input in the search bar we are not gonna filter the list, and display all the data */
          if (input === "")
            return (
              <View
                style={{
                  marginVertical: 25,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={item.MaterieIcon}
                  style={{ width: 64, height: 64 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 20,
                    width: 200,
                    fontWeight: "300",
                  }}
                >
                  {item.Nume}
                </Text>
                <TouchableOpacity
                  style={{ height: 40 }}
                  onPress={() => {
                    navigation.navigate("OrarLaboratorMaterie", {materie: item.Nume});
                  }}
                >
                  <Image
                    source={require("../assets/Images/components-images/RightArrowIcon.png")}
                    style={{
                      height: 20,
                      width: 20,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          /* Filters the data as the user types something in the search bar */ else if (
            item.Nume.toLowerCase().includes(input.toLowerCase())
          ) {
            return (
              <View
                style={{
                  marginVertical: 25,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={item.MaterieIcon}
                  style={{ width: 64, height: 64 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 20,
                    width: 200,
                    fontWeight: "300",
                  }}
                >
                  {item.Nume}
                </Text>
                <TouchableOpacity
                  style={{ height: 40 }}
                  onPress={() => {
                    navigation.navigate("OrarLaboratorMaterie");
                  }}
                >
                  <Image
                    source={require("../assets/Images/components-images/RightArrowIcon.png")}
                    style={{
                      height: 20,
                      width: 20,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 30,
  },
});
