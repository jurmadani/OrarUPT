import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import * as AppleAuthentication from "expo-apple-authentication";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const handleSignInApple = async () => {
    try {
      const credential = await AppleAuthentication.refreshAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (credential.email != null) {
        setUser({
          email: credential.email,
          nume: "",
          prenume: "",
          facultate: "",
          specializare: "",
          an: "",
          grupa: "",
          profilePictureURL: "",
          profileIsSet: "false",
          authProvider: "Apple",
          userAppleUID: credential.user,
        });
        navigation.navigate("CreateProfileScreen");
      } else {
        const user = (
          await firebase
            .firestore()
            .collection("Users")
            .doc(credential.user)
            .get()
        ).data();
        setUser({
          email: user.email,
          nume: user.nume,
          prenume: user.prenume,
          facultate: user.facultate,
          specializare: user.specializare,
          an: user.an,
          grupa: user.grupa,
          profilePictureURL: user.profilePictureURL,
          profileIsSet: user.profileIsSet,
          authProvider: user.authProvider,
          userAppleUID: credential.user,
        });
        if (user.profileIsSet === "true") {
          console.log("User logged in via Apple Login successfully");
          navigation.navigate("MainApp");
        } else navigation.navigate("CreateProfileScreen");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignInGoogle = () => {
    Alert.alert("Google sign-in temporarly unavailable");
  };

  const handleSignInFacebook = async () => {
    Alert.alert("Facebook sign-in temporarly unavailable");
  };

  return (
    <AuthContext.Provider
      value={{
        register: async (email, password) => {
          var okToProcedeFurher = true;
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((e) => {
              Alert.alert("Email indisponibil", email + " este folosit deja");
              okToProcedeFurher = false;
            });
          if (okToProcedeFurher) {
            setUser({
              email: email,
              nume: "",
              prenume: "",
              facultate: "",
              specializare: "",
              an: "",
              grupa: "",
              profilePictureURL: "",
              profileIsSet: "false",
              authProvider: "studentEmail",
            });
            console.log(
              user,
              "User is good, navigating to creating profile screen..."
            );
          }
        },
        login: async (email, password) => {
          await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async () => {
              const user = await firebase
                .firestore()
                .collection("Users")
                .doc(email)
                .get();
              if (
                user.data() === undefined ||
                user.data().profileIsSet === "false"
              ) {
                setUser({
                  email: email,
                  nume: "",
                  prenume: "",
                  facultate: "",
                  specializare: "",
                  an: "",
                  grupa: "",
                  profilePictureURL: "",
                  profileIsSet: "false",
                  authProvider: "studentEmail",
                });
                navigation.navigate("Setting-Up Profile");
              } else {
                setUser(user.data());
                navigation.navigate("MainApp");
              }
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              if (errorCode === "auth/wrong-password") {
                Alert.alert("Parola incorecta");
              } else if (errorCode === "auth/invalid-email") {
                Alert.alert("Email invalid");
              }
              console.log(errorCode);
            });
        },
        user: user,
        updateUser: updateUser,
        loginViaApple: handleSignInApple,
        loginViaGoogle: handleSignInGoogle,
        loginViaFacebook: handleSignInFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
