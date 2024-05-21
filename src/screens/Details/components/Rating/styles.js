import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import text from "../../../../constants/text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  numbers: {
    ...text.p1,
    color: colors.yellow,
  },
});

export default styles;
