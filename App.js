import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { AuthProvider } from "./hooks/useAuth";

export default function App() {
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
