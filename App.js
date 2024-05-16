import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

import Home from "./src/screens/Home/Home";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";

import AppContext from "./src/contexts/App";
import theme from "./src/constants/theme";

export default function App() {
  const colorSheme = useColorScheme();
  const propStyles = styles(colorSheme);

  return (
    <AppContext.Provider value={{ colorSheme }}>
      <SafeAreaView style={propStyles.container}>
        <StatusBar style="auto" />
        {/* <Home /> */}
        <ProductDetails />
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = (colorSheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme[colorSheme].primaryBackground,
    },
  });
