import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterByEmailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
