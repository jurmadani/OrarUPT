import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { AuthProvider } from "./hooks/useAuth";
import { LogBox } from "react-native";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); //Hide warnings
  LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </ApplicationProvider>
  );
}
