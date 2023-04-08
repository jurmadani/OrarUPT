import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import { SafeAreaView } from "react-native";
import MaterieCard from "../components/MaterieCard";
import { data } from "../AC-IS-Data";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  var { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* background image*/}

        <Image
          source={require("../assets/Images/components-images/HomeScreenBackground.png")}
          style={{
            height: windowHeight,
            width: windowWidth,
            position: "absolute",
          }}
        />

        {/* globe animation*/}
        <LottieView
          source={require("../assets/Animations/globe.json")}
          autoPlay
          loop
          speed={0.8}
          style={{
            width: 220,
            height: 220,
            position: "absolute",
            left: 55,
            top: 54,
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
            height: windowHeight * 2,
            alignSelf: "center",
            marginTop: (windowHeight - 10) / 2.3,
            position: "absolute",
            zIndex: 0, // Set zIndex to control the stacking order
            borderRadius: 32,
          }}
        >
          {/* Header for the first scroll view (horizontal)*/}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
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
            }}
          >
            {" "}
            Din acest semestru
          </Text>

          {/* Materii scroll view */}
          <FlatList
            horizontal={true}
            data={data.NUME_MATERII_ANUL2_AC_IS.MATERII}
            renderItem={({item}) => <MaterieCard item={item}/>}
          />
        </View>

        {/* Header text + profile Icon*/}
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
              marginTop: 40,
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
      </ScrollView>
    </SafeAreaView>
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
});
