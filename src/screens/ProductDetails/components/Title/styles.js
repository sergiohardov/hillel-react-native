import { StyleSheet } from "react-native";
import text from "../../../../constants/text";
import theme from "../../../../constants/theme";

const styles = (colorSheme) =>
  StyleSheet.create({
    title: {
      ...text.h2,
      fontWeight: "bold",
      color: theme[colorSheme].primary,
    },
  });

export default styles;
