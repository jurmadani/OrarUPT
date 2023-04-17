import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { Button } from "@ui-kitten/components/ui";
import useAuth from "../hooks/useAuth";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { changePassword } = useAuth();
  const [email, setEmail] = useState("");
  const EmailIcon = () => <Icon name="mail" size={25} color="black" />;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: 30 }}>
            Recupereaza-ti parola
          </Text>
          <View style={styles.TextInputView1}>
            <Input
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
              placeholder="Email"
              size="large"
              accessoryLeft={EmailIcon}
              textStyle={{ fontSize: 15 }}
              style={{
                width: 330,
                borderWidth: 0,
                backgroundColor: "transparent",
              }}
            />
          </View>
          <Text style={{ marginTop: 10, fontSize: 12, color: "#BFBFBF" }}>
            Introdu-ti mail-ul pentru a primi un link de resetare a parolei
          </Text>

          <Button onPress={() => changePassword(email)} style={styles.button}>
            Trimite link de resetare
          </Button>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  icon: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: StatusBar.currentHeight + 20,
    marginLeft: 10,
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
    marginTop: 60,
    borderWidth: 1,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#2E3192",
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginTop: 30,
  },
});
