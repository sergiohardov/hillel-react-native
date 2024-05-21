import { StyleSheet } from "react-native";
import text from "../../../../constants/text";
import colors from "../../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  counterNum: {
    ...text.h3,
  },
  counterBtn: {
    backgroundColor: colors.silver,
    padding: 2,
    borderRadius: 5,
  },
});

export default styles;
