import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firebase";
import { Button, IndexPath } from "@ui-kitten/components";
import useAuth from "../hooks/useAuth";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { height, width } from "../constants/themes";
import { Input, Select, SelectItem, SelectGroup } from "@ui-kitten/components";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateProfileScreen = () => {
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
  const dataFacultati = [
    {
      title: "Arhitectura si Urbanism",
      disabled: true,
      accessoryLeft: SiglaFAUT,
    },
    { title: "Automatica si Calculatoare", accessoryLeft: SiglaAC },
    {
      title: "Chimie Industriala si Ingineria Mediului",
      disabled: true,
      accessoryLeft: SiglaChimie,
    },
    { title: "Constructii", disabled: true, accessoryLeft: SiglaConstructii },
    {
      title: "Electronica, Telecomunicatii si Tehnologii Informationale",
      disabled: true,
      accessoryLeft: SiglaETcTi,
    },
    {
      title: "Electrotehnica si Electroenergetica",
      disabled: true,
      accessoryLeft: SiglaEE,
    },
    {
      title: "Management in Productie si Transporturi",
      disabled: true,
      accessoryLeft: SiglaMPT,
    },
    { title: "Mecanica", disabled: true, accessoryLeft: SiglaMecanica },
    {
      title: "Stiinte ale Comunicarii",
      disabled: true,
      accessoryLeft: SiglaSC,
    },
  ];

  const dataSpecializari = [
    {
      specializare: "Calculatoare şi tehnologia informaţiei (română)",
      disabled: true,
    },
    {
      specializare: "Ingineria sistemelor",
      disabled: false,
    },
    {
      specializare: "Calculatoare şi tehnologia informaţiei (engleză)",
      disabled: true,
    },
    {
      specializare: "Informatică",
      disabled: true,
    },
    {
      specializare: "Informatică (la distanță)",
      disabled: true,
    },
  ];

  const EmailIcon = () => <Icon name="mail" size={25} color="black" />;
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [selectedFacultate, setSelectedFacultate] = useState("");
  const [selectedSpecializare, setSelectedSpecializare] = useState("");
  const [selectedAn, setSelectedAn] = useState("");
  const [selectedGrupa, setSelectedGrupa] = useState("");
  const [nume, SetNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [viewStyle, setViewStyle] = useState(styles.TextInputView1);
  const [viewStyle2, setViewStyle2] = useState(styles.TextInputView2);
  const [profilePictureURL, setProfilePictureURL] = useState("");
  const [buttonPressed, setbuttonPressed] = useState(false);
  const { user, updateUser } = useAuth();

  useEffect(() => {
    if (buttonPressed) {
      const InsertUserAndPictureIntoFirebase = async () => {
        await addImageToStorage(image);
        await getDownloadURL();
      };
      InsertUserAndPictureIntoFirebase().then(() =>
        console.log(
          "User information and his profile picture added to firebase"
        )
      );
    }
  }, [image]);

  const NumeExists = () => {
    return nume != "";
  };
  const PrenumeExists = () => {
    return prenume != "";
  };

  const FacultateExists = () => {
    return selectedFacultate != "";
  };

  const SpecializareExists = () => {
    return selectedSpecializare != "";
  };

  const AnExists = () => {
    return selectedAn != "";
  };

  const GrupaExists = () => {
    return selectedGrupa != "";
  };

  const createUser = (url) => {
    const newUser = {
      email: user?.email,
      nume: nume,
      prenume: prenume,
      facultate: selectedFacultate,
      specializare: selectedSpecializare,
      facultate: selectedFacultate,
      an: selectedAn,
      grupa: selectedGrupa,
      profilePictureURL: url,
      profileIsSet: "true",
      authProvider: user.authProvider,
    };
    return newUser;
  };

  const getDownloadURL = async () => {
    console.log(user.email);
    const urlRef = firebase.storage().ref().child(user?.email);
    const url = await urlRef.getDownloadURL();
    setProfilePictureURL(url.toString());
    await addUserIntoFirestore(
      nume,
      prenume,
      selectedFacultate,
      selectedSpecializare,
      selectedAn,
      selectedGrupa,
      url.toString()
    );

    const newUser = createUser(url.toString());
    updateUser(newUser);
  };

  const addUserIntoFirestore = async (
    nume,
    prenume,
    facultate,
    specializare,
    an,
    grupa,
    profilePictureURL
  ) => {
    firebase
      .firestore()
      .collection("Users")
      .doc(user.authProvider === "studentEmail" ? user.email : user.userAppleUID)
      .set({
        email: user.email,
        nume: nume,
        prenume: prenume,
        facultate: facultate,
        specializare: specializare,
        an: an,
        grupa: grupa,
        profilePictureURL: profilePictureURL,
        profileIsSet: "true",
        authProvider: user.authProvider
      })
      .then(() => {
        const newUser = createUser(profilePictureURL);
        updateUser(newUser);
      })
      .then(() => console.log("User added"))
      .catch((error) => console.log(error));
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#4c69a5" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity onPress={() => navigation.replace("PreLogin")}>
              <Icon
                name="arrowleft"
                size={30}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                marginTop: 9,
                marginLeft: 25,
              }}
            >
              Seteaza-ti profilul
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.avatarPlaceholder}
              onPress={pickImage}
            >
              {image && <Image source={{ uri: image }} style={styles.avatar} />}
              {!image && <Icon name="plus" size={30} color="white" />}
            </TouchableOpacity>
          </View>

          <View style={styles.inner}>
            <View style={viewStyle}>
              <Input
                placeholder="Nume"
                size="large"
                textStyle={{ fontSize: 15 }}
                style={{
                  width: 330,
                  borderWidth: 0,
                  backgroundColor: "transparent",
                }}
                value={nume}
                onChangeText={(text) => {
                  SetNume(text);
                }}
              />
            </View>
            <View style={viewStyle2}>
              <Input
                placeholder="Prenume"
                size="large"
                textStyle={{ fontSize: 15 }}
                style={{
                  width: 330,
                  borderWidth: 0,
                  backgroundColor: "transparent",
                }}
                value={prenume}
                onChangeText={(text) => {
                  setPrenume(text);
                }}
              />
            </View>

            <Select
              style={{
                width: 330,
                borderWidth: 0,
                backgroundColor: "transparent",
                marginTop: 5,
                marginBottom: 10,
              }}
              placeholder="Facultatea"
              size="large"
              value={selectedFacultate}
              disabled={!(PrenumeExists() && NumeExists())}
              onSelect={(index) => {
                setSelectedFacultate(dataFacultati[index - 1].title);
              }}
            >
              {dataFacultati.map((item, index) => (
                <SelectItem
                  key={index}
                  title={item.title}
                  disabled={item.disabled}
                  accessoryLeft={item.accessoryLeft}
                />
              ))}
            </Select>

            <Select
              style={{
                width: 330,
                borderWidth: 0,
                backgroundColor: "transparent",
                marginTop: 5,
                marginBottom: 10,
              }}
              placeholder="Specializarea"
              size="large"
              value={selectedSpecializare}
              onSelect={(index) => {
                setSelectedSpecializare(
                  dataSpecializari[index - 1].specializare
                );
              }}
              disabled={!(PrenumeExists() && NumeExists() && FacultateExists())}
            >
              {dataSpecializari.map((item, index) => (
                <SelectItem
                  key={index}
                  title={item.specializare}
                  disabled={item.disabled}
                />
              ))}
            </Select>
            <Select
              style={{
                width: 330,
                borderWidth: 0,
                backgroundColor: "transparent",
                marginTop: 5,
                marginBottom: 10,
              }}
              placeholder="An"
              size="large"
              value={selectedAn}
              onSelect={(index) => {
                setSelectedAn(index.toString());
              }}
              disabled={
                !(
                  PrenumeExists() &&
                  NumeExists() &&
                  FacultateExists() &&
                  SpecializareExists()
                )
              }
            >
              <SelectItem title="1" disabled={true} />
              <SelectItem title="2" />
              <SelectItem title="3" disabled={true} />
              <SelectItem title="4" disabled={true} />
            </Select>
            <Select
              placeholder="Grupa"
              style={{
                width: 330,
                borderWidth: 0,
                backgroundColor: "transparent",
                marginTop: 5,
                marginBottom: 10,
              }}
              size="large"
              value={selectedGrupa}
              onSelect={(index) => {
                setSelectedGrupa(index.toString());
              }}
              disabled={
                !(
                  PrenumeExists() &&
                  NumeExists() &&
                  FacultateExists() &&
                  SpecializareExists() &&
                  AnExists()
                )
              }
            >
              <SelectGroup title="Grupa 1">
                <SelectItem title="Subgrupa 1.1" />
                <SelectItem title="Subgrupa 1.2" />
              </SelectGroup>
              <SelectGroup title="Grupa 2">
                <SelectItem title="Subgrupa 2.1" />
                <SelectItem title="Subgrupa 2.2" />
              </SelectGroup>
              <SelectGroup title="Grupa 3">
                <SelectItem title="Subgrupa 3.1" />
                <SelectItem title="Subgrupa 3.2" />
              </SelectGroup>
              <SelectGroup title="Grupa 4">
                <SelectItem title="Subgrupa 4.1" />
                <SelectItem title="Subgrupa 4.2" />
              </SelectGroup>
              <SelectGroup title="Grupa 5">
                <SelectItem title="Subgrupa 5.1" />
                <SelectItem title="Subgrupa 5.2" />
              </SelectGroup>
              <SelectGroup title="Grupa 6">
                <SelectItem title="Subgrupa 6.1" />
                <SelectItem title="Subgrupa 6.2" />
              </SelectGroup>
            </Select>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                if (NumeExists()) {
                  setViewStyle(styles.TextInputView1);
                  if (PrenumeExists()) {
                    setViewStyle2(styles.TextInputView2);
                    if (
                      FacultateExists() &&
                      SpecializareExists() &&
                      AnExists() &&
                      GrupaExists()
                    ) {
                      if (!image) {
                        Alert.alert(
                          "Imagine de profil lipseste",
                          "Doresti sa continui fara?",
                          [
                            {
                              text: "Adauga imagine",
                              onPress: async () => {
                                setbuttonPressed(true);
                                await pickImage();
                                navigation.replace(
                                  "LoadingScreenAfterSetting-Up Profile"
                                );
                              },
                            },
                            {
                              text: "Continua",
                              onPress: async () => {
                                navigation.replace(
                                  "LoadingScreenAfterSetting-Up Profile"
                                );
                                await addUserIntoFirestore(
                                  nume,
                                  prenume,
                                  selectedFacultate,
                                  selectedSpecializare,
                                  selectedAn,
                                  selectedGrupa,
                                  "https://firebasestorage.googleapis.com/v0/b/orar-upt.appspot.com/o/DefaultProfilePicture.png?alt=media&token=3f390381-e7d8-4232-a5ec-79a2388af267"
                                );
                                console.log(
                                  "user added without profile pic, used the default one instead"
                                );
                              },
                            },
                          ]
                        );
                      } else {
                        navigation.replace(
                          "LoadingScreenAfterSetting-Up Profile"
                        );

                        (async () => {
                          await addImageToStorage(image),
                            await getDownloadURL(),
                            console.log("Success!");
                        })();
                      }
                    }
                  } else {
                    setViewStyle2(styles.TextInputView2Error);
                  }
                } else {
                  setViewStyle(styles.TextInputView1Error);
                }
              }}
            >
              <Button
                style={styles.button}
                disabled={
                  !(
                    PrenumeExists() &&
                    NumeExists() &&
                    FacultateExists() &&
                    SpecializareExists() &&
                    AnExists() &&
                    GrupaExists()
                  )
                }
              >
                Continua
              </Button>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: StatusBar.currentHeight + 10,
    marginLeft: 10,
  },
  avatarPlaceholder: {
    width: 110,
    height: 110,
    backgroundColor: "#E1E2E6",
    borderRadius: 60,
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 60,
  },
  inner: {
    marginTop: 28,
    flex: 1,
    borderWidth: 0,
    width: width,
    alignItems: "center",
  },
  TextInputView1: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    width: 340,
    height: 60,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  TextInputView2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    width: 340,
    height: 60,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  TextInputView1Error: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    width: 340,
    height: 60,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  TextInputView2Error: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    width: 340,
    height: 60,
    marginTop: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    marginTop: 28,
    width: 300,
    height: 50,
    backgroundColor: "#2E3192",
    borderWidth: 0,
    borderRadius: 10,
  },
});

export default CreateProfileScreen;
