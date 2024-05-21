import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import text from "../../constants/text";
import theme from "../../constants/theme";
import sizes from "../../constants/sizes";

const styles = (themeMode) =>
  StyleSheet.create({
    container: {
      gap: 10,
      paddingHorizontal: sizes.indent,
      paddingVertical: sizes.indent,
    },
    settingContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
    },
    settingText: {
      color: theme[themeMode].primary,
    },
  });

export default styles;
