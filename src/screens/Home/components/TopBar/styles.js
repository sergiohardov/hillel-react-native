import { StyleSheet } from "react-native";
import text from "../../../../constants/text";
import theme from "../../../../constants/theme";
import colors from "../../../../constants/colors";

const styles = (themeMode) =>
  StyleSheet.create({
    container: {
      gap: 15,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      ...text.h1,
      color: theme[themeMode].primary,
    },
    controllsContainer: {
      flexDirection: "row",
      gap: 10,
    },
    inputContainer: {
      paddingHorizontal: 15,
      paddingVertical: 8,
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      backgroundColor: theme[themeMode].secondary,
      borderRadius: 100,

      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.8,
      elevation: 2,
    },
    input: {
      ...text.p1,
      flex: 1,
      color: colors.gray_light,
    },
  });

export default styles;
