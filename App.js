import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { AuthProvider } from "./hooks/useAuth";
import { LogBox } from "react-native";

// Define custom navigation theme
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  // Ignore specific warning logs
  LogBox.ignoreLogs(["Warning: ..."]); //Hide warnings
  LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end

  return (
    // Wrap the app with the ApplicationProvider from UI Kitten, and set the theme to light
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* Wrap the app with the NavigationContainer from react-navigation */}
      <NavigationContainer>
        {/* Wrap the app with the AuthProvider from the custom useAuth hook */}
        <AuthProvider>
          {/* Render the StackNavigator component */}
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
