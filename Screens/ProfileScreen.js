import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import useAuth from "../hooks/useAuth";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { firebase } from "../firebase";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SiglaAC = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/AC-Sigla.png")}
    style={{ width: 45, height: 27, marginLeft: 10 }}
  />
);

const SiglaFAUT = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/FAUT-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaChimie = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/Chimie-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaConstructii = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/Constructii-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaETcTi = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/ETcTi-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaEE = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/EE-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaMPT = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/MPT-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaMecanica = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/Mecanica-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);
const SiglaSC = () => (
  <Image
    source={require("../assets/Images/SigleFacultati/SC-Sigla.png")}
    style={{ width: 45, height: 39, marginLeft: 10 }}
  />
);

const facultati = {
  "Arhitectura si Urbanism": SiglaFAUT,
  "Automatica si Calculatoare": SiglaAC,
  "Chimie Industriala si Ingineria Mediului": SiglaChimie,
  Constructii: SiglaConstructii,
  "Electronica, Telecomunicatii si Tehnologii Informationale": SiglaETcTi,
  "Electrotehnica si Electroenergetica": SiglaEE,
  "Management in Productie si Transporturi": SiglaMPT,
  Mecanica: SiglaMecanica,
  "Stiinte ale Comunicarii": SiglaSC,
};

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

 
  useEffect(() => {
    if (image != null) {
      const InsertPictureIntoFirebase = async () => {
        await addImageToStorage(image);
        await getDownloadURL();
      };
      InsertPictureIntoFirebase();
    }
  }, [image]);

  const getDownloadURL = async () => {
    const urlRef = firebase.storage().ref().child(user?.email);
    const url = await urlRef.getDownloadURL();
    await firebase
      .firestore()
      .collection("Users")
      .doc(user.authProvider === "Apple" ? user.userAppleUID : user.email)
      .update({
        profilePictureURL: url,
      });
  };

  const addImageToStorage = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    const filename = user?.email;

    var ref = firebase.storage().ref().child(filename).put(blob);
    try {
      await ref;
    } catch (error) {
      console.log(error);
    }

    console.log("Picture uploaded");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {/* The view is divided in 2 parts, the first one is the profile picture taking half of the screen height, and it's blurred */}
        {/* The blurred background profile picture */}

        <Image
          source={{
            uri: image === null ? user.profilePictureURL : image,
          }}
          style={{
            alignSelf: "center",
            width: windowWidth,
            height: windowHeight / 2,
          }}
        />

        <BlurView intensity={50} style={StyleSheet.absoluteFill} tint="dark" />

        {/* The profile picture image view */}
        <View
          style={{
            backgroundColor: "transparent",
            width: 130,
            height: 130,
            position: "absolute",
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 70,
            borderRadius: 200,
            overflow: "hidden",
          }}
        >
          <BlurView intensity={30} style={StyleSheet.absoluteFill} />
          <Image
            source={{
              uri: image === null ? user.profilePictureURL : image,
            }}
            style={{
              alignSelf: "center",
              width: 122,
              height: 122,
              borderRadius: 200,
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            zIndex: 3,
            width: windowWidth,
            height: windowHeight / 2 - 110,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 45,
            marginTop: 30,
            alignContent: "center",
          }}
        >
          {/* The change photo icon */}
          <TouchableOpacity
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 30,
            }}
            onPress={async () => {
              await pickImage();
            }}
          >
            <Image
              source={require("../assets/Images/components-images/EditIcon.png")}
              style={{
                height: 30,
                width: 30,
                tintColor: "white",
              }}
            />
          </TouchableOpacity>
        </View>
        {/* The view for the buttons */}
        <View
          style={{
            position: "absolute",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "flex-end",
            height: windowHeight / 2,
            zIndex: 2,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              marginTop: 80,
              fontSize: 39,
            }}
          >
            {user.prenume} {user.nume}{" "}
          </Text>
          {/* Email of the user */}
          <Text
            style={{
              color: "white",
              fontSize: 13,
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            Student la {user.facultate}
          </Text>

          {/* Butoanele pentru signout si about cu view blurat*/}
          {/* Butonul 1 */}
          <View style={{ marginBottom: 2 }}>
            <View
              style={{
                width: windowWidth,
                height: 50,
                backgroundColor: "transparent",
                marginBottom: 5,
                zIndex: 2,
              }}
            >
              <TouchableOpacity
                style={{ height: 55, justifyContent: "center" }}
                onPress={() => {
                  navigation.navigate("Despre");
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: 55,
                  }}
                >
                  <Image
                    source={require("../assets/Images/components-images/InformationIcon.png")}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: "white",
                      marginLeft: 20,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "300",
                      color: "white",
                      fontSize: 18,
                      marginLeft: 15,
                    }}
                  >
                    Despre OrarUPT
                  </Text>
                  <Image
                    source={require("../assets/Images/components-images/RightArrowIcon.png")}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: "white",
                      marginLeft: 144,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <BlurView intensity={30} style={StyleSheet.absoluteFill} />
          </View>

          {/* Butonul 2 */}
          <View>
            <View
              style={{
                width: windowWidth,
                height: 50,
                backgroundColor: "transparent",
                marginBottom: 5,
                zIndex: 2,
              }}
            >
              <TouchableOpacity
                style={{ height: 55, justifyContent: "center" }}
                onPress={logout}
              >
                <View style={{ flexDirection: "row", height: 55 }}>
                  <Image
                    source={require("../assets/Images/components-images/ExitIcon.png")}
                    style={{
                      height: 25,
                      width: 25,
                      tintColor: "white",
                      marginLeft: 20,
                      marginTop: 15,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: "300",
                      color: "white",
                      fontSize: 18,
                      marginLeft: 15,
                      marginTop: 15,
                    }}
                  >
                    Iesi din cont
                  </Text>
                  <Image
                    source={require("../assets/Images/components-images/RightArrowIcon.png")}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: "white",
                      marginLeft: 180,
                      marginTop: 15,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <BlurView intensity={30} style={StyleSheet.absoluteFill} />
          </View>
        </View>
        {/* Informatii despre user*/}
        <View
          style={{
            position: "absolute",
            width: windowWidth,
            height: windowHeight,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
          }}
        >
          {/* Header text */}
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Informatii</Text>
          {/* Divider bar */}
          <View
            style={{
              height: 1,
              width: windowWidth - 50,
              backgroundColor: "#A5A5A5",
              marginTop: 20,
            }}
          />
          {/* Primul row cu informatii: Sigla facultate + Specializare */}
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            {facultati[user.facultate]()}
            <Text style={{ fontSize: 17, marginLeft: 10, marginBottom: 20 }}>
              Specializare: {user.specializare}
            </Text>
          </View>
          {/* Divider bar */}
          <View
            style={{
              height: 1,
              width: windowWidth - 50,
              backgroundColor: "#A5A5A5",
              marginTop: 5,
            }}
          />
          {/* Al doilea row cu informatie: Anul */}
          <Text style={{ fontSize: 17, marginTop: 20, marginBottom: 20 }}>
            Anul {user.an}
          </Text>
          {/* Divider bar */}
          <View
            style={{
              height: 1,
              width: windowWidth - 50,
              backgroundColor: "#A5A5A5",
              marginTop: 5,
            }}
          />
          {/* Al treilea row cu informatie: Grupa */}
          <Text style={{ fontSize: 17, marginTop: 20, marginBottom: 20 }}>
            Grupa {user.grupa}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
