import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import LoadingScreen from "./Screens/LoadingScreen";

const Stack = createNativeStackNavigator();
/*
Stack screens order: Splash,Getting Started, Pre Login, Reguister, Setting-Up Profile,LoadingScreenAfterSetting-Up Profile, HomeScreen
*/
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    
    </Stack.Navigator>
  );
};

export default StackNavigator;
