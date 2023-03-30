import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@ui-kitten/components";
import { Button } from "@ui-kitten/components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleSVG from "../assets/Images/GoogleLogo.svg";
import FacebookSVG from "../assets/Images/FacebookLogo.svg";
import AppleSVG from "../assets/Images/AppleLogo.svg";

const RegisterByEmailScreen = () => {
  const navigation = useNavigation();

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <EntypoIcon name={secureTextEntry ? "eye-with-line" : "eye"} size={20} />
    </TouchableWithoutFeedback>
  );

  const PasswordIcon = () => <Icon name="lock" size={30} color="black" />;

  const EmailIcon = () => <Icon name="mail" size={25} color="black" />;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} sty>
          <Icon name="arrowleft" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Creeaza contul tau</Text>

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

        <SafeAreaView style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <Button style={styles.button}>Inregistreaza-te</Button>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={{ alignItems: "center" }}>
          <Text>sau continua cu</Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.TouchableOpacityStyle}>
            <Image
              source={FacebookSVG}
              resizeMode="contain"
              style={styles.svgIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacityStyle}>
            <Image
              source={GoogleSVG}
              resizeMode="contain"
              style={styles.svgIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableOpacityStyle}>
            <Image
              source={AppleSVG}
              resizeMode="contain"
              style={styles.svgIconStyle}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <Text style={styles.footerText}>Ai deja cont?</Text>
          <Button
            appearance="ghost"
            style={styles.RegisterButton}
            onPress={() => navigation.navigate("Login")}
          >
            Conecteaza-te
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  icon: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: StatusBar.currentHeight + 60,
    marginLeft: 10,
    width:40,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 50,
  },
  TextInput: {
    borderWidth: 0,
    height: 60,
    width: 340,
    fontSize: 18,
    marginLeft: 20,
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
    marginLeft: 20,
    marginTop: 60,
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
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
  },
  button: {
    marginTop: 25,
    width: 300,
    height: 50,
    backgroundColor: "#2E3192",
    borderWidth: 0,
    borderRadius: 10,
    alignContent: "center",
  },
  lineStyle1: {
    borderWidth: 0.9,
    borderColor: "#eee",
    width: 100,
    margin: 30,
  },
  lineStyle2: {
    borderWidth: 0.9,
    borderColor: "#eee",
    width: 100,
  },
  TouchableOpacityStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    marginTop: 50,
    marginLeft: 23,
    marginRight: 23,
  },
  svgIconStyle: {
    height: 27,
    width: 27,
  },
  footerText: {
    color: "#B7B7B7",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 19,
  },
  RegisterButton: {
    marginTop: 20,
  },
});

export default RegisterByEmailScreen;
