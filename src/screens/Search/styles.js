import { StyleSheet } from "react-native";
import sizes from "../../constants/sizes";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: sizes.indent,
    flex: 1,
    gap: 20,
  },
});

export default styles;
