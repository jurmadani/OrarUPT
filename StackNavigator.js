import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator();
/*
Stack screens order: Splash,Getting Started, PreLogin, Reguister, Setting-Up Profile,LoadingScreenAfterSetting-Up Profile, MainApp,
*/
const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="MainApp"
        component={BottomTabNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
