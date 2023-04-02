import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";

const Stack = createNativeStackNavigator();
/*
Stack screens order: Splash,Getting Started, Pre Login,
*/
const StackNavigator = () => {
  return (
    <Stack.Navigator>

       <Stack.Screen
        name="Setting-Up Profile"
        component={CreateProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown:false, gestureEnabled:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
