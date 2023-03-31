import { View, Text } from "react-native";
import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import { firebase } from "../firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider
      value={{
        register: async (email, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
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
