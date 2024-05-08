import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/screens/Home/Home";

import colors from "./src/constants/colors";
import ProductDetails from "./src/screens/ProductDetails/ProductDetails";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Home /> */}
      <ProductDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.seasalt,
  },
});
