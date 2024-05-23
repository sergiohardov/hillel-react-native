import { StyleSheet } from "react-native";
import theme from "../../constants/theme";
import sizes from "../../constants/sizes";
import text from "../../constants/text";
import colors from "../../constants/colors";

const styles = (themeMode) =>
  StyleSheet.create({
    preloadContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
    },
    image: {
      height: 300,
      width: "100%",
      backgroundColor: theme[themeMode].primaryBackground,
      justifyContent: "center",
    },
    detailsContainer: {
      backgroundColor: theme[themeMode].secondary,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingHorizontal: sizes.indent,
      paddingVertical: sizes.indent,
      flex: 1,
      gap: 20,
    },
    detailsTitle: {
      ...text.h2,
    },
    priceContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    priceText: {
      ...text.h2,
      color: colors.red,
    },
    paramsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cartBtnContainer: {
      backgroundColor: colors.red,
      padding: 15,
      borderRadius: 100,
      marginBottom: 0,
      marginTop: "auto",
    },
    aboutContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    aboutTitle: {
      ...text.h3,
    },
    textDescription: {
      ...text.p2,
      color: colors.silver,
    },
    cartBtnText: {
      ...text.h3,
      color: colors.white,
      textAlign: "center",
    },
  });

export default styles;
