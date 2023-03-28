import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Input } from "@ui-kitten/components";


const RegisterByEmailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrowleft" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Creeaza contul tau</Text>
      <View style={styles.TextInputView}>
        <Icon name='mail' size={30} color='black' style={{marginLeft:60,}}/>
        <TextInput placeholder="Email" style={styles.TextInput} />
      </View>
      <View style={styles.TextInputView}>
        <Icon name='lock' size={30} color='black' style={{marginLeft:60,}}/>
        <TextInput placeholder="Parola" style={styles.TextInput} />
      </View>
    </View> 
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
    fontSize: 20,
    marginLeft: 20,
   
  },
  TextInputView:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    backgroundColor:'#FAFAFA',
    flexDirection:'row',
    width:340,
    height:60,
    marginLeft:20,
    marginTop:30,
  }
});

export default RegisterByEmailScreen;
