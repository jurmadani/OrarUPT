import { View, Text } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebase } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser)
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
        updateUser : updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
