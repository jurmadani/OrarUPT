import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreLoginScreen from "./Screens/PreLoginScreen";
import OnBoardingScreen from "./Screens/OnBoardingScreen";
import SplashScreen from "./Screens/SplashScreen";
import RegisterByEmailScreen from "./Screens/RegisterByEmailScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CreateProfileScreen from "./Screens/CreateProfileScreen";
import LoadingScreen from "./Screens/LoadingScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MaterieModalScreen from "./Screens/MaterieModalScreen";
import OrarLaboratorMaterieDinSearchScreen from "./Screens/OrarLaboratorMaterieDinSearchScreen";
import AboutScreen from "./Screens/AboutScreen";

const Stack = createNativeStackNavigator();
/*
 <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Getting Started"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="PreLogin"
        component={PreLoginScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Register"
        component={RegisterByEmailScreen}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Setting-Up Profile"
        component={CreateProfileScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="LoadingScreenAfterSetting-Up Profile"
        component={LoadingScreen}
        options={{
          headerShown: false,
        }}
      />
Stack screens order: Splash,GettingStarted, PreLogin, Reguister, Setting-Up Profile,LoadingScreenAfterSetting-Up Profile, MainApp,
*/
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreLogin"
        component={PreLoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          gestureEnabled: false,
          
        }}
      />
      <Stack.Screen
        name="OrarLaboratorMaterie"
        component={OrarLaboratorMaterieDinSearchScreen}
        options={{
          headerShown: false,
        }}
      />
         <Stack.Screen
        name="Despre"
        component={AboutScreen}
      />
      <Stack.Screen
        name="MaterieInformatieModal"
        component={MaterieModalScreen}
        options={{
          presentation: "modal",
          gestureEnabled: true,
          headerShown: false,
          headerTransparent: "true",
          headerBlurEffect: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
