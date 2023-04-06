import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  Alert
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components/ui";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import GoogleSVG from "../assets/Images/GoogleLogo.svg";
import FacebookSVG from "../assets/Images/FacebookLogo.svg";
import AppleSVG from "../assets/Images/AppleLogo.svg";
import { Input } from "@ui-kitten/components";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const RegisterByEmailScreen = () => {
  const navigation = useNavigation();
  const { register, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [emailViewStyle, setEmailViewStyle] = useState(styles.TextInputView1);
  const [passwordViewStyle, setPasswordViewStyle] = useState(
    styles.TextInputView2
  );
  const [isRegisterButtonPressed, setRegisterButtonPressed] = useState(false);

  const VerifiedIcon = (boolean) => (
    <View>
      <LottieView
        source={require("../assets/Animations/SuccessAnimation.json")}
        style={{
          width: boolean ? 34 : 0, // set a default width of 0 when isStudent is false
          height: boolean ? 34 : 0, // set a default height of 0 when isStudent is false
          marginLeft: 1,
          marginTop: -1,
        }}
        loop={false}
        autoSize="true"
        autoPlay={boolean ? "true" : "false"}
        resizeMode="contain"
      />
    </View>
  );
  const renderIcon = React.memo(() => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <EntypoIcon name={secureTextEntry ? "eye-with-line" : "eye"} size={20} />
    </TouchableWithoutFeedback>
  ));

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const PasswordIcon = () => <Icon name="lock" size={30} color="black" />;

  const EmailIcon = () => <Icon name="mail" size={25} color="black" />;

  const checkIfEmailIsStudentEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email)) {
      const parts = email.split("@");
      const usernameRegex = /^[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;
      if (parts[1] === "student.upt.ro" && usernameRegex.test(parts[0])) {
        setEmailViewStyle(styles.TextInputView1);
        setIsStudent(true);
      } else {
        setIsStudent(false);
      }
    } else {
      setIsStudent(false);
    }
  };

  const checkIfPasswordMeetsRequirments = (password) => {
    if (isStudent && password.length >= 6) {
      setPasswordViewStyle(styles.TextInputView2);
      setRegisterButtonPressed(false);
    }
  };

  useEffect(() => {
    checkIfEmailIsStudentEmail(email);
  }, [email]);

  useEffect(() => {
    checkIfPasswordMeetsRequirments(password);
  }, [password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} sty>
          <Icon name="arrowleft" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Creeaza contul tau</Text>
        <View style={emailViewStyle}>
          <Input
            placeholder="Email"
            size="large"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              checkIfEmailIsStudentEmail(text);
            }}
            accessoryLeft={EmailIcon}
            accessoryRight={
              isStudent ? VerifiedIcon(isStudent) : null // conditionally render the VerifiedIcon component
            }
            textStyle={{ fontSize: 15 }}
            style={{
              width: 330,
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
          />
        </View>
        {!isStudent && isRegisterButtonPressed && (
          <View style={{ alignItems: "center", marginTop: 5 }}>
            <Text style={{ color: "red", fontSize: 10 }}>
              Email-ul trebuie sa fie de forma prenume.nume@student.upt.ro
            </Text>
          </View>
        )}
        <View style={passwordViewStyle}>
          <Input
            placeholder="Parola"
            size="large"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              checkIfPasswordMeetsRequirments(text);
            }}
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
        {isStudent && isRegisterButtonPressed && (
          <View style={{ alignItems: "center", marginTop: 5 }}>
            <Text style={{ color: "red", fontSize: 10 }}>
              Parola trebuie sa contina minim 6 caractere
            </Text>
          </View>
        )}
        <SafeAreaView style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              if (!isStudent) {
                setEmailViewStyle(styles.TextInputView1Updated);
                setRegisterButtonPressed(true);
              } else {
                if (password.length >= 6) {
                  setEmailViewStyle(styles.TextInputView1);
                  setRegisterButtonPressed(false);
                  if (register(email, password) == true)
                    navigation.replace("Setting-Up Profile");
                  else{
                    Alert.alert("Email indisponibil",email + " este deja folosit")
                  }
                } else {
                  setPasswordViewStyle(styles.TextInputView2Updated);
                  setRegisterButtonPressed(true);
                }
              }
            }}
          >
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
    width: 40,
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
  TextInputView1Updated: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "red",
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
  TextInputView2Updated: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "red",
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
    marginLeft: 12,
    marginRight: 12,
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
