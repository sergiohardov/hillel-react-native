import { StyleSheet } from "react-native";
import sizes from "../../constants/sizes";
import text from "../../constants/text";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: sizes.indent,
    paddingVertical: sizes.indent,
    gap: 20,
  },
  container: {
    paddingHorizontal: sizes.indent,
    flex: 1,
    gap: 20,
  },
});

export default styles;
