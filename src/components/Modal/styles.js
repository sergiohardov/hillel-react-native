import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import text from "../../constants/text";

const styles = (themeMode) =>
  StyleSheet.create({
    modalContainerBg: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainerBody: {
      flex: 1,
      paddingHorizontal: 18,
      backgroundColor: colors.white,
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
    },
    modalContentContainer: {
      paddingVertical: 20,
    }
  });

export default styles;
