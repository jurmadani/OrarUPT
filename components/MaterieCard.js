import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MaterieCard = ({ item }) => {

  const navigation = useNavigation();
  console.log(item)

  return (
    <View style={[styles.container, {backgroundColor:item.CardBackground}]}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={item.MaterieIcon}
          style={{
            height: 33,
            width: 33,
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            marginLeft: 10,
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          onPress={() =>
           navigation.navigate( 'MaterieInformatieModal', {materie: item})
          }
        >
          <Image
            source={require("../assets/Images/components-images/TwoDotsIcon.png")}
            style={{
              height: 20,
              width: 20,
              tintColor: "white",
              marginTop: 16,
              marginLeft: 72,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.text,{fontSize: item.Nume.length >= 30 ? 14 : 18}]}>{item.Nume}</Text>
    </View>
  );
};

export default MaterieCard;

const styles = StyleSheet.create({
  container: {
    height: 119,
    width: 149,
    borderRadius: 16,
    marginTop: 10,
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontWeight: "700",
    padding: 2,
    alignSelf: "flex-start",
    marginLeft: 8,
    marginTop: 10,
    fontSize: 20,
  },
});
