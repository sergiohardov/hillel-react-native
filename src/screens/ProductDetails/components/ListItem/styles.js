import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import text from "../../../../constants/text";


const styles = StyleSheet.create({
  container: {
    height: 112,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textContainer: {
    flexShrink: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  textTitle: {
    ...text.h3,
  },
  textDescription: {
    ...text.body,
    color: colors.gray_light,
  },
  textPrice: {
    ...text.h3,
    color: colors.red,
  },
  mediaContainer: {
    height: "100%",
    width: 120,
    padding: 10,
  },
  mediaImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export default styles;
