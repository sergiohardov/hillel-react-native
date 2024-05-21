import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import useApp from "./src/hooks/useApp";
import AppContext from "./src/contexts/App";
import theme from "./src/constants/theme";

import TabsNavigation from "./src/navigation/TabsNavigation";

export default function App() {
  const {
    fontsLoaded,
    fontError,
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
  } = useApp();

  if (!fontsLoaded && !fontError) return null;

  return (
    <AppContext.Provider
      value={{ themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode }}
    >
      <StatusBar style={theme[themeMode].statusBarStyle} />
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
