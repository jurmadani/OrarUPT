import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Input } from "@ui-kitten/components";
import { Button } from "@ui-kitten/components/ui";
import { color } from "@mui/system";
import { height, width } from "../constants/themes";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const PasswordIcon = () => <Icon name="lock" size={30} color="black" />;

  const EmailIcon = () => <Icon name="mail" size={25} color="black" />;

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <EntypoIcon name={secureTextEntry ? "eye-with-line" : "eye"} size={20} />
    </TouchableWithoutFeedback>
  );
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Image
              source={require("../assets/Images/AppIcon.png")}
              style={styles.AppIconStyle}
            />
            <Text style={styles.headerText}>
              CONECTEAZA-TE CU CONTUL DE STUDENT
            </Text>
            <View style={styles.TextInputView1}>
              <Input
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
            <View style={styles.TextInputView2}>
              <Input
                placeholder="Parola"
                size="large"
                accessoryRight={renderIcon}
                accessoryLeft={PasswordIcon}
                secureTextEntry={secureTextEntry}
                textStyle={{ fontSize: 15 }}
                style={{
                  width: 330,
                  borderWidth: 0,
                  backgroundColor: "transparent",
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Button style={styles.button}>Conecteaza-te</Button>
      </TouchableOpacity>

      <Button appearance="ghost" style={{ marginBottom: 30 }}>
        Ai uitat parola?
      </Button>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  icon: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: StatusBar.currentHeight + 20,
    marginLeft: 10,
  },
  AppIconStyle: {
    width: 150,
    height: 150,
    marginTop: StatusBar.currentHeight || 40, // add marginTop
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 10,
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
    marginTop: 30,
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
    marginTop: 10,
    marginBottom: 60,
    borderWidth: 1,
  },
  button: {
    marginBottom: 60,
    width: 300,
    height: 50,
    backgroundColor: "#2E3192",
    borderWidth: 0,
    borderRadius: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 0,
    width: width,
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
