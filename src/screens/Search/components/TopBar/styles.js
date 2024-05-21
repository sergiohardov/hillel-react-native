import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import text from "../../../../constants/text";
import theme from "../../../../constants/theme";

const styles = (themeMode) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 10,
      height: 40,
    },
    inputContainer: {
      justifyContent: "center",
      flex: 1,
    },
    inputIconSearch: {
      position: "absolute",
      left: 15,
      zIndex: 1,
    },
    inputBtnClose: {
      position: "absolute",
      right: 15,
    },
    inputField: {
      ...text.p1,
      color: theme[themeMode].primary,

      height: "100%",
      backgroundColor: theme[themeMode].primaryBackground,
      borderWidth: 1,
      borderColor: colors.red,
      borderRadius: 20,
      paddingHorizontal: 45,
    },
    modalContainer: {
      gap: 10,
    },
    modalSettingContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
    },
    modalSettingText: {
      color: theme[themeMode].primary,
    },
  });

export default styles;
