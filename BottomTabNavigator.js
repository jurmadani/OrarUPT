import HomeScreen from "./Screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScheduleScreen from "./Screens/ScheduleScreen";
import SearchScreen from "./Screens/SearchScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import zIndex from "@mui/material/styles/zIndex";

const Tab = createBottomTabNavigator();
const HomeIcon = () => <Ionicons name="ios-home" size={20} />;
/*
Stack screens order: Splash,Getting Started, Pre Login, Reguister, Setting-Up Profile,LoadingScreenAfterSetting-Up Profile, HomeScreen
*/
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#F1EEEE",
          height: 90,
          borderRadius: 16,
        },
        tabBarActiveTintColor:'#2E3192',
        tabBarInactiveTintColor:'#5F5F5F',
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if(rn === "HomeScreen")
                iconName = focused ? 'home' : 'home-outline'
            else if(rn === "Schedule")
                iconName = focused ? 'calendar' : 'calendar-outline'
            else if(rn === "Search")
                iconName = focused ? 'search' : 'search-outline'
            else if(rn === 'Profile')
                iconName = focused ? 'person' : 'person-outline'

            return <Ionicons name={iconName} size={size} color={color} style={{marginTop:7}}/>
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
