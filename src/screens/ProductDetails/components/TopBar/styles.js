import { StyleSheet } from "react-native";
import colors from "../../../../constants/colors";
import text from "../../../../constants/text";

const styles = StyleSheet.create({
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

    height: "100%",
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 20,
    paddingHorizontal: 45,
  },
  modalContainerBg: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainerBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: 450,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default styles;
