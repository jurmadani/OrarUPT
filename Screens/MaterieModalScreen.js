import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { data } from "../AC-IS-Data";
import { height } from "../constants/themes";
import { FlatList } from "react-native";
import ProfesorCard from "../components/ProfesorCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const materiiData = data.NUME_MATERII_ANUL2_AC_IS.MATERII;
const transparent = false

const MaterieModalScreen = ({route}) => {
  const navigation = useNavigation();
 
  return (
    <View style={styles.container}>
      <BlurView intensity={100} style={StyleSheet.absoluteFill}>
        {/* Transparent and blurred background */}

        {/* Close button */}
        <View style={{ marginTop: 15, alignItems: "flex-end" }}>
          <Button title="Inchide" onPress={() => navigation.goBack()} color={transparent ? 'white' : null }/>
        </View>
        {/* Numele materiei + logo */}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            width: 300,
          }}
        >
          <Image
            source={route.params.materie.MaterieIcon}
            style={{ height: 95, width: 95, marginRight: 20, marginTop: 20 }}
          />
          <Text
            style={{
              color: transparent ? "white" : 'black',
              fontWeight: "800",
              fontSize: route.params.materie.Nume.length >= 46 ? 20 : 26,
              marginTop: 30,
              width: 200
         
            }}
          >
            {route.params.materie.Nume}
          </Text>
        </View>
        {/* Primul view cu cele trei informatii */}
        <View
          style={{
            marginTop: 30,
            width: windowWidth - 30,
            height: 200,
            backgroundColor: transparent ? "#40404040" : route.params.materie.CardBackground,
            alignSelf: "center",
            borderRadius: 16,
          }}
        >
          {/* Primul rand cu informatie -> FORMA DE EVALUARE */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/Images/components-images/TipEvaluareIcon.png")}
              style={{ height: 46, width: 46, marginLeft: 10, marginTop: 10 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                marginTop: 12,
                marginLeft: 9,
              }}
            >
              Forma de evaluare {route.params.materie.FormaEvaluare}
            </Text>
          </View>
          {/* Al doilea rand cu informatie -> NUMARUL DE CREDITE */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/Images/components-images/CrediteIcon.png")}
              style={{ height: 46, width: 46, marginLeft: 10, marginTop: 10 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                marginTop: 12,
                marginLeft: 9,
              }}
            >
              {route.params.materie.Credite} credite
            </Text>
          </View>
          {/* Primul rand cu informatie -> FORMA DE EVALUARE */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/Images/components-images/ProfessorIcon.png")}
              style={{ height: 46, width: 46, marginLeft: 10, marginTop: 10 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
                marginTop: 12,
                marginLeft: 9,
                width: 180,
              }}
            >
              Profesor curs: {route.params.materie.ProfesorCurs}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 23,
            marginLeft: 20,
            marginTop: 20,
            color: transparent ? 'white' : 'black'
          }}
        >
          Profesori laborator
        </Text>
        <View>
          <FlatList
            horizontal={true}
            data={route.params.materie.ProfesoriLaborator}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProfesorCard item={item} transparent={transparent} culoareCard={route.params.materie.CardBackground}/>}
          />
        </View>

        {/* Footer image */}
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../assets/Images/components-images/UPT-Icon.png")}
            style={{ height: 80, width: 257, marginLeft: 10, marginTop: 10 }}
          />
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MaterieModalScreen;
