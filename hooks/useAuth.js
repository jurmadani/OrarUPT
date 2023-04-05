import { View, Text } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import * as AppleAuthentication from 'expo-apple-authentication'


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  const handleSignIn = async () => {
    try{
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes:[
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL
        ]
      })
      console.log(credential)
      
    }catch(e){
      console.log(e)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        register: async (email, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then(
                setUser({
                  email: email,
                  nume: "",
                  prenume: "",
                  facultate: "",
                  specializare: "",
                  an: "",
                  grupa: "",
                  profilePictureURL:"",
                })
              );
          } catch (e) {
            console.log(e);
          }
        },
        user: user,
        updateUser : updateUser,
        loginViaApple: handleSignIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
