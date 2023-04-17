// Importing necessary modules and dependencies
import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import * as AppleAuthentication from "expo-apple-authentication";

// Creating a context for authentication
const AuthContext = createContext({});

// Exporting the AuthProvider component to be used as a wrapper around the application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for storing user information
  const navigation = useNavigation(); // Hook for navigation

  // Function to update user information
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Function for handling sign-in with Apple
  const handleSignInApple = async () => {
    try {
      // Requesting user data from Apple Authentication
      const credential = await AppleAuthentication.refreshAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      // If user's email is available, create a new user object and navigate to profile creation screen
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
      }
      // If email is not available, fetch user data from Firestore and navigate to appropriate screen
      else {
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

  // Function for handling sign-out
  const handleSignOut = () => {
    Alert.alert("Doresti sa te deconectezi?", "", [
      {
        text: "Anuleaza",
      },
      {
        text: "Da",
        onPress: () => {
          navigation.navigate("PreLogin");
          updateUser(null);
        },
      },
    ]);
  };

  // Function for handling sign-in with Google (currently unavailable)
  const handleSignInGoogle = () => {
    Alert.alert("Google sign-in temporarily unavailable");
  };

  // Function for handling sign-in with Facebook (currently unavailable)
  const handleSignInFacebook = async () => {
    Alert.alert("Facebook sign-in temporarily unavailable");
  };

  // Wrapping the application with the AuthContext.Provider and providing necessary values and functions

  return (
    <AuthContext.Provider
      value={{
        register: async (email, password) => {
          // Function for registering a new user with email and password
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
            navigation.navigate("Setting-Up Profile");
          }
        },
        login: async (email, password) => {
          // Function for logging in with email and password
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
        logout: handleSignOut, // Function for logging out
        user: user, // Current user object
        updateUser: updateUser, // Function for updating user object
        loginViaApple: handleSignInApple, // Function for signing in with Apple authentication
        loginViaGoogle: handleSignInGoogle, // Function for signing in with Google authentication
        loginViaFacebook: handleSignInFacebook, // Function for signing in with Facebook authentication
        changePassword: async (userEmail) => {
          firebase
            .auth()
            .sendPasswordResetEmail(userEmail)
            .then(() => {
              Alert.alert("Password reset email sent");
              navigation.navigate("Login");
            })
            .catch((error) => Alert.alert("Email-ul nu exista sau este invalid"));
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
