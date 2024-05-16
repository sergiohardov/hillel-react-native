import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

import Home from "./src/screens/Home/Home";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";

import AppContext from "./src/contexts/App";
import theme from "./src/constants/theme";
import { useEffect, useState } from "react";

export default function App() {
  const colorSheme = useColorScheme();

  const [themeMode, setThemeMode] = useState("light");
  const [autoTheme, setAutoTheme] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setThemeMode("dark");
    } else if (autoTheme) {
      setThemeMode(colorSheme);
    } else {
      setThemeMode("light");
    }
  }, [autoTheme, darkMode, colorSheme]);

  const propStyles = styles(themeMode);

  return (
    <AppContext.Provider
      value={{ themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode }}
    >
      <SafeAreaView style={propStyles.container}>
        <StatusBar style={theme[themeMode].statusBarStyle} />
        {/* <Home /> */}
        <ProductDetails />
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = (themeMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme[themeMode].primaryBackground,
    },
  });
