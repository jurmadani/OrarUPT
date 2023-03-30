import { Text, View, Image, StyleSheet, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleSVG from "../assets/Images/GoogleLogo.svg";
import FacebookSVG from "../assets/Images/FacebookLogo.svg";
import AppleSVG from "../assets/Images/AppleLogo.svg";
import { Button } from "@ui-kitten/components/ui";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/Images/AppIcon.png")}
        style={styles.AppIconStyle}
      />
      <Text style={styles.headerText}>Hai sa incepem</Text>

      <TouchableOpacity style={styles.TouchableOpacityStyle}>
        <Image
          source={FacebookSVG}
          resizeMode="contain"
          style={styles.svgIconStyle}
        />
        <Text style={styles.svgText}>Continua cu Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacityStyle}>
        <Image
          source={GoogleSVG}
          resizeMode="contain"
          style={styles.svgIconStyle}
        />
        <Text style={styles.svgText}>Continua cu Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TouchableOpacityStyle}>
        <Image
          source={AppleSVG}
          resizeMode="contain"
          style={styles.svgIconStyle}
        />
        <Text style={styles.svgText}>Continua cu Apple</Text>
      </TouchableOpacity>
 
      <View style={styles.lineStyle1} />

      <Text style={{ marginTop: -40 }}>sau</Text>

      <View style={styles.lineStyle2} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Button style={styles.button}>Conecteaza-te cu email</Button>
      </TouchableOpacity>


      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.footerText}>Nu ai un cont?</Text>
        <Button
          appearance="ghost"
          style={styles.RegisterButton}
          onPress={() => navigation.navigate("Register")}
        >
          Inregistreaza-te
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  AppIconStyle: {
    width: "45%",
    height: "19%",
    marginTop: StatusBar.currentHeight || 80, // add marginTop
  },
  headerText: {
    fontSize: 39,
    fontWeight: "bold",
    marginTop: 50,
  },
  TouchableOpacityStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 310,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#eee",
    marginTop: 20,
  },
  svgIconStyle: {
    height: 27,
    width: 27,
    marginLeft: 30,
  },
  svgText: {
    flex: 0.8,
    marginLeft: 20,
  },
  lineStyle1: {
    borderWidth: 0.9,
    borderColor: "#eee",
    width: 100,
    margin: 30,
    marginLeft: -130,
  },
  lineStyle2: {
    borderWidth: 0.9,
    borderColor: "#eee",
    width: 100,
    marginTop: -9,
    marginLeft: 170,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 8,
  },
  button: {
    marginTop: 25,
    width: 300,
    height: 50,
    backgroundColor: "#2E3192",
    borderWidth: 0,
    borderRadius: 10,
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

export default LoginScreen;
