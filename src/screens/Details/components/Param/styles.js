import { StyleSheet } from "react-native";
import text from "../../../../constants/text";
import colors from "../../../../constants/colors";

const styles = (direction) =>
  StyleSheet.create({
    container: {
      gap: 5,
      alignItems:
        direction === "left"
          ? "flex-start"
          : direction === "right"
          ? "flex-end"
          : "center",
    },
    title: {
      ...text.p1,
      color: colors.silver,
    },
    value: {
      ...text.h3,
      color: colors.black,
    },
  });

export default styles;
