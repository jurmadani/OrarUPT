import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import moment from "moment/moment";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { data } from "../AC-IS-Data";
import ScheduleCard from "../components/ScheduleCard";
import { ScrollView } from "react-native";
import { TramRounded } from "@mui/icons-material";
import { useEffect } from "react";
import LottieView from "lottie-react-native";
import useAuth from "../hooks/useAuth";

const [day, month, year] = moment().format("DD/MM/YYYY ").split("/");
const dayOfWeek = moment().format("dddd");
const zileInitiale = ["L", "M", "M", "J", "V", "S", "D"];
const windowWidth = Dimensions.get("window").width;

const zile = {
  Monday: "Luni",
  Tuesday: "Marti",
  Wednesday: "Miercuri",
  Thursday: "Joi",
  Friday: "Vineri",
  Saturday: "Sambata",
  Sunday: "Duminica",
};

const zileArray = [
  "Luni",
  "Marti",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambata",
  "Duminica",
];

const luniCalendaristice = {
  "01": "Ianuarie",
  "02": "Februarie",
  "03": "Martie",
  "04": "Aprilie",
  "05": "Mai",
  "06": "Iunie",
  "07": "Iulie",
  "08": "August",
  "09": "Septembrie",
  10: "Octombrie",
  11: "Noiembrie",
  12: "Decembrie",
};

const ScheduleScreen = () => {
  const [pressedIndex, setPressedIndex] = useState(
    Object.keys(zile).indexOf(dayOfWeek)
  ); // initial state for pressed index
  const [weekend, setWeekend] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (pressedIndex == 5 || pressedIndex == 6) setWeekend(true);
    else setWeekend(false);
  }, [pressedIndex]);

  const renderItem = ({ item, index }) => {
    // function to render each item in FlatList
    const touchableOpacityStyle =
      index === pressedIndex
        ? styles.touchableOpacityPressed
        : styles.touchableOpacityNotPressed;
    const textStyle =
      index === pressedIndex
        ? styles.textStylePressed
        : styles.textStyleNotPressed;
    return (
      <View>
        <TouchableOpacity
          style={touchableOpacityStyle}
          onPress={() => setPressedIndex(index)} // update pressed index state on press
        >
          <Text style={textStyle}>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ComponentaOrarDoarCursSubFormaDeCarduri = ({ marginBottomNeeded }) => {
    if (zile[dayOfWeek] !== "sambata" && zile[dayOfWeek] !== "duminica") {
      try {
        const ziuaAleasa = zileArray[pressedIndex];
        const entriesCursuri = Object.entries(
          data.ANUL_II_SERIA_IS_SEM_II_2022_2023_CURSURI[
            ziuaAleasa.charAt(0).toLowerCase() + ziuaAleasa.slice(1)
          ]
        );
        return (
          <View style={{ marginBottom: marginBottomNeeded ? 250 : 0 }}>
            {/* Cursuri */}

            {entriesCursuri.map(([key, value]) => {
              return <ScheduleCard item={value} ora={key} esteCurs={true} />;
            })}
          </View>
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  const ComponentaOrarLaboratorSiSeminarSubFormaDeCarduri = ({
    marginBottomNeeded,
  }) => {
    if (zile[dayOfWeek] !== "sambata" && zile[dayOfWeek] !== "duminica") {
      try {
        const ziuaAleasa = zileArray[pressedIndex];
        const entriesLaboratoareSauSeminarii = Object.entries(
          data.ANUL_II_SERIA_IS_SEM_II_2022_2023_LABORATOARE[
            ziuaAleasa.charAt(0).toLowerCase() + ziuaAleasa.slice(1)
          ][user?.grupa]
        );
        return (
          <View style={{ marginBottom: marginBottomNeeded ? 250 : 0 }}>
            {/* Cursuri */}

            {entriesLaboratoareSauSeminarii.map(([key, value]) => {
              return <ScheduleCard item={value} ora={key} esteCurs={false} />;
            })}
          </View>
        );
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* -------- Header -------- */}
      <View style={{ flexDirection: "row" }}>
        {/* -------- Ziua curenta -------- */}
        <Text style={{ fontSize: 50, fontWeight: "bold", margin: 15 }}>
          {day}
        </Text>
        {/* -------- View cu Ziua din saptamana si luna + an -------- */}
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#BCC1CD",
            }}
          >
            {zile[dayOfWeek]}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#BCC1CD",
            }}
          >
            {luniCalendaristice[month]} {year}
          </Text>
        </View>
        {/* -------- Indicatorul cu azi -------- */}
        <View
          style={{
            height: 44,
            width: 83,
            borderRadius: 8,
            backgroundColor: "#F1F1F1",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 70,
            marginTop: 23,

            shadowColor: "#171717",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Text style={{ color: "#2E3192", fontWeight: "bold", fontSize: 17 }}>
            {pressedIndex === Object.keys(zile).indexOf(dayOfWeek)
              ? "Azi"
              : zileArray[pressedIndex]}
          </Text>
        </View>
      </View>
      {/* -------- View-ul principal cu border radius -------- */}
      <View
        style={{
          width: windowWidth,
          backgroundColor: "#F1F1F1",
          borderRadius: 35,
          alignSelf: "center",
        }}
      >
        {/* Flatlist-ul cu cele 7 zile ale saptamanii */}
        <View style={{ alignItems: "center" }}>
          <FlatList
            horizontal={true}
            data={zileInitiale}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        {/* White line divider */}
        <View
          style={{
            width: windowWidth - 30,
            height: 1,
            backgroundColor: "white",
            alignSelf: "center",
            marginTop: 10,
          }}
        />
        {/* Columns names */}
        {!weekend && (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "#BCC1CD", marginLeft: 20, marginRight: 70 }}>
              Ora
            </Text>
            <Text style={{ color: "#BCC1CD" }}>Curs</Text>
          </View>
        )}
        {weekend && (
          <View
            style={{
              width: windowWidth,
              height: 400,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieView
              source={require("../assets/Animations/RelaxingManAnimation.json")}
              autoPlay
              loop
              speed={0.3}
              style={{
                width: 300,
                height: 300,
              }}
            />
            <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
              Nu ai ore in weekend
            </Text>
          </View>
        )}

        <ScrollView showsVerticalScrollIndicator={false}>
          <ComponentaOrarDoarCursSubFormaDeCarduri marginBottomNeeded={false} />
          <ComponentaOrarLaboratorSiSeminarSubFormaDeCarduri
            marginBottomNeeded={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  touchableOpacityNotPressed: {
    width: 32,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 20,
    backgroundColor: "transparent",
  },
  touchableOpacityPressed: {
    width: 32,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 9,
    marginRight: 9,
    marginTop: 20,
    backgroundColor: "#393C98",
  },
  textStyleNotPressed: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  textStylePressed: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
