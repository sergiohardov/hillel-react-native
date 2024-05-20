import { StyleSheet } from "react-native";
import text from "../../../../constants/text";
import theme from "../../../../constants/theme";

const styles = (themeMode) =>
  StyleSheet.create({
    title: {
      ...text.h2,
      fontWeight: "bold",
      color: theme[themeMode].primary,
    },
  });

export default styles;
