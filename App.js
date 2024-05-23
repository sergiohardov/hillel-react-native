import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider } from "./src/contexts/AppContext";
import TabsNavigation from "./src/navigation/TabsNavigation";

import useAppTheme from "./src/hooks/useAppTheme";
import useAppFonts from "./src/hooks/useAppFonts";

import theme from "./src/constants/theme";

export default function App() {
  const { themeMode } = useAppTheme();
  const { fontsLoaded, fontError } = useAppFonts();

  if (!fontsLoaded && !fontError) return null;

  return (
    <AppProvider>
      <StatusBar style={theme[themeMode].statusBarStyle} />
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}
