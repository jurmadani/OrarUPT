import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";
import LoginScreen from "./Screens/LoginScreen";

const Stack = createNativeStackNavigator();
/*
Stack screens order: Splash,Getting Started, Pre Login,
*/
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreLogin"
        component={PreLoginScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Register"
        component={RegisterByEmailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
