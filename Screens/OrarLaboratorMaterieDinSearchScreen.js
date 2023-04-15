import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { data } from "../AC-IS-Data";
import OraCard from "../components/OraCard";
import { ScrollView } from "react-native";
import LaboratorCard from "../components/LaboratorCard";

const OrarLaboratorMaterieDinSearchScreen = ({ route }) => {
  const navigation = useNavigation();

  const zileArray = ["luni", "marti", "miercuri", "joi", "vineri"];

  return (
    <SafeAreaView style={styles.container}>
      {/* GoBack Arrow Icon */}
      <TouchableOpacity
        style={{ width: 50 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/Images/components-images/LeftArrowIcon.png")}
          style={{
            height: 35,
            width: 35,
            marginLeft: 15,
            marginTop: 15,
          }}
        />
      </TouchableOpacity>
      {/* Header title pentru materie si textul de sub */}
      <View>
        {/* Header */}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 33,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          {route.params.materie}
        </Text>
        {/* Text de sub header */}
        <Text
          style={{
            color: "#BCC1CD",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 5,
          }}
        >
          Orarul laboratoarelor
        </Text>
        {/* Line divider */}
        <View
          style={{
            width: 330,
            borderWidth: 0.5,
            backgroundColor: "#BCC1CD",
            marginLeft: 20,
            marginTop: 4,
          }}
        />
      </View>
      {/* Orarul pe zile pentru fiecare grupa in functie de maaterie */}

      <ScrollView>
        {zileArray.map((zi) => {
          return (
            <LaboratorCard zi={zi} materie={route.params.materie}/>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrarLaboratorMaterieDinSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
