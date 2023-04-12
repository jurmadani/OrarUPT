import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import useAuth from "../hooks/useAuth";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native";
import MaterieCard from "../components/MaterieCard";
import { data } from "../AC-IS-Data";
import { ImageBackground } from "react-native";
import OraCard from "../components/OraCard";
import moment from "moment/moment";
import CursCard from "../components/CursCard";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const saptamanaCurenta = 9;

const zile = {
  Monday: "luni",
  Tuesday: "marti",
  Wednesday: "miercuri",
  Thursday: "joi",
  Friday: "vineri",
  Saturday: "sambata",
  Sunday: "duminica",
};

const dayOfWeek = moment().format("dddd");

const HomeScreen = () => {
  var { user } = useAuth();
  var numberOfTestsPassed = 0;

  const ComponentaOrarSubFormaDeCarduri = () => {
    if (zile[dayOfWeek] !== "sambata" && zile[dayOfWeek] !== "duminica") {
      try {
        const entriesLaboratoare = Object.entries(
          data.ANUL_II_SERIA_IS_SEM_II_2022_2023_LABORATOARE[zile[dayOfWeek]][
            "3.1"
          ]
        );

        return (
          <View style={{ alignItems: "center", marginBottom:100 }}>
            {/* Laboratoare */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: 20,
                marginTop: 20,
                alignSelf: "flex-start",
              }}
            >
              Laboratoare
            </Text>
            {entriesLaboratoare.map(([key, value]) => {
              const infAdit = value.InformatieAditionala;
              var esteSaptamanaPara;
              if (saptamanaCurenta % 2 === 0)
                esteSaptamanaPara = "saptamana para";
              else esteSaptamanaPara = "saptamana impara";
              if (infAdit === "null") {
                return <OraCard item={value} ora={key} />;
              } else if (infAdit === esteSaptamanaPara) {
                return <OraCard item={value} ora={key} />; // sau orice altă acțiune pe care doriți să o efectuați când condiția nu este îndeplinită
              }
            })}
          </View>
        );
      } catch (e) {
        console.log(e);
      }
    } else {
      // Dacă ziua este "sambata" sau "duminica", randează alt conținut
      return (
        <View style={{ alignItems: "center", marginBottom: 100 }}>
          <LottieView
            source={require("../assets/Animations/RelaxingManAnimation.json")}
            autoPlay
            loop
            speed={0.3}
            style={{
              width: 200,
              height: 200,
            }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            Astazi este {zile[dayOfWeek]}, nu ai ore
          </Text>
        </View>
      );
    }
  };

  const ComponentaOrarDoarCursSubFormaDeCarduri = () => {
    if (zile[dayOfWeek] !== "sambata" && zile[dayOfWeek] !== "duminica") {
      try {
        const entriesCursuri = Object.entries(
          data.ANUL_II_SERIA_IS_SEM_II_2022_2023_CURSURI[zile[dayOfWeek]]
        );
        return (
          <View style={{ alignItems: "center", marginBottom: 100, marginTop:-100, }}>
            {/* Cursuri */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: 20,
                marginTop: 20,
                alignSelf: "flex-start",
              }}
            >
              Cursuri
            </Text>
            {entriesCursuri.map(([key, value]) => {
              return <CursCard item={value} ora={key} />;
            })}
          </View>
        );
      } catch (e) {
        console.log(e);
        numberOfTestsPassed += 1;
      }
      if (numberOfTestsPassed === 2) {
        return (
          <View style={{ alignItems: "center", marginBottom: 100 }}>
            <LottieView
              source={require("../assets/Animations/RelaxingManAnimation.json")}
              autoPlay
              loop
              speed={0.3}
              style={{
                width: 200,
                height: 200,
              }}
            />
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              Astazi este {zile[dayOfWeek]}, nu ai ore
            </Text>
          </View>
        );
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Images/components-images/HomeScreenBackground.png")}
      resizeMode="contain"
      style={styles.imageBackground}
    >
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Header message and profile picture icon*/}
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
              marginTop: 80,
              width: windowHeight / 2 - 100,
              marginLeft: 20,
              zIndex: 3, // Set zIndex to control the stacking order
            }}
          >
            Buna dimineata, Daniel👋
          </Text>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => console.log("Navigate to my profile")}
          >
            <Image
              source={require("../assets/Images/DefaultProfilePicture.png")}
              style={{
                height: 53,
                width: 53,
                borderRadius: 112.5,
                marginTop: 44,
                zIndex: 3,
                position: "absolute",
                marginLeft: -20,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* globe animation*/}
        <LottieView
          source={require("../assets/Animations/globe.json")}
          autoPlay
          loop
          speed={0.06}
          style={{
            width: 310,
            height: 310,
            position: "absolute",
            left: 40,
            top: 43,
            zIndex: 1, // Set zIndex to control the stacking order
          }}
        />

        {/* books image*/}
        <Image
          source={require("../assets/Images/components-images/Books.png")}
          style={{
            left: 310,
            top: 265,
            position: "absolute",
            zIndex: 2, // Set zIndex to control the stacking order
          }}
        />

        {/* white view image*/}
        <View
          style={{
            backgroundColor: "white",
            width: windowWidth,
            alignSelf: "center",
            marginTop: (windowHeight - 10) / 4.1,
            Index: 0, // Set zIndex to control the stacking order
            borderRadius: 32,
          }}
        >
          {/* Header for the first scroll view (horizontal)*/}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            Materiile tale
          </Text>
          <Text
            style={{
              fontWeight: "600",
              color: "#BCC1CD",
              marginLeft: 17,
              marginTop: 4,
              fontSize: 15,
            }}
          >
            {" "}
            Din acest semestru
          </Text>

          {/* Materii scroll view */}
          <View>
            <FlatList
              horizontal={true}
              data={data.NUME_MATERII_ANUL2_AC_IS.MATERII}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <MaterieCard item={item} />}
            />
          </View>

          {/*Second part of the homescreen  */}
          {/* Header for the second part of the screen */}
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Este saptamana {saptamanaCurenta}
          </Text>
          {/* Under header text */}
          <Text
            style={{
              fontWeight: "600",
              color: "#BCC1CD",
              marginLeft: 17,
              marginTop: 4,
              fontSize: 15,
            }}
          >
            Orarul tau de astazi
          </Text>
          {/* Second flatlist */}
            <ComponentaOrarSubFormaDeCarduri />

          <ComponentaOrarDoarCursSubFormaDeCarduri />
        </View>

        {/* Header text + profile Icon*/}
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E3192",
  },
  TouchableOpacityStyle: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 50,
    marginRight: 50,
    zIndex: 4,
  },
  imageBackground: {
    width: windowWidth, // Set width to window width or desired width
    height: windowHeight, // Set height to window height or desired height
  },
});
