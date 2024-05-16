import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import Home from "./src/screens/Home/Home";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";

import AppContext from "./src/contexts/App";

export default function App() {
  return (
    <AppContext.Provider value={{  }}>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      <ProductDetails />
    </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.seasalt,
  },
});
