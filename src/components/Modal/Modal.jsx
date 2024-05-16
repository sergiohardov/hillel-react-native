import { useContext } from "react";
import {
  View,
  Text,
  Modal as NativeModal,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import AppContext from "../../contexts/App";
import styles from "./styles";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function Modal({
  title = "Modal Title",
  modalVisible = false,
  handleModalClose = () => {},
  children,
}) {
  const { themeMode } = useContext(AppContext);
  const propStyles = styles(themeMode);

  return (
    <NativeModal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={propStyles.modalContainerBg}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={propStyles.modalContainerBody}>
              <View style={propStyles.modalHeaderContainer}>
                <Text style={propStyles.modalHeaderTitle}>{title}</Text>
                <Pressable
                  onPress={handleModalClose}
                  style={propStyles.modalCloseBtn}
                >
                  <EvilIcons
                    name="close"
                    size={35}
                    color={theme[themeMode].primary}
                  />
                </Pressable>
              </View>

              <View style={propStyles.modalContentContainer}>{children}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </NativeModal>
  );
}
