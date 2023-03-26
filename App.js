import { StyleSheet, Text, View, Button, Image } from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import LoginScreen from "./Screens/LoginScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  this.state = {
    showApp: false,
  };

  onDone = () => {
    this.setState({ showRealApp: true });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
