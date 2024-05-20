import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import text from "../../constants/text";
import theme from "../../constants/theme";

const styles = (themeMode) =>
  StyleSheet.create({
    modalContainerBg: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainerBody: {
      flex: 1,
      paddingHorizontal: 18,
      backgroundColor: theme[themeMode].primaryBackground,
      marginTop: 450,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
    },
    modalHeaderContainer: {
      paddingVertical: 20,
      borderBottomColor: colors.silver,
      borderBottomWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    modalHeaderTitle: {
      ...text.h2,
      fontWeight: "bold",
      color: theme[themeMode].primary,
    },
    modalContentContainer: {
      paddingVertical: 20,
    },
  });

export default styles;
