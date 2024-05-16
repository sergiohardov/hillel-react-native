import {
  View,
  TextInput,
  Pressable,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import useTopBar from "../../hooks/useTopBar";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";

export default function TopBar() {
  const {
    colorSheme,
    inputValue,
    setInputValue,
    modalVisible,
    setModalVisible,
  } = useTopBar();
  const propStyles = styles(colorSheme);

  const handleSearchClear = () => setInputValue("");
  const handleModalOpen = () => setModalVisible(true);
  const handleModalClose = () => setModalVisible(false);

  return (
    <>
      <View style={propStyles.container}>
        <View style={propStyles.inputContainer}>
          <EvilIcons
            name="search"
            size={24}
            color={theme[colorSheme].primary}
            style={propStyles.inputIconSearch}
          />
          <TextInput
            style={propStyles.inputField}
            onChangeText={setInputValue}
            value={inputValue}
          />
          {inputValue.length ? (
            <Pressable
              onPress={handleSearchClear}
              style={propStyles.inputBtnClose}
            >
              <EvilIcons name="close" size={24} color={colors.red} />
            </Pressable>
          ) : null}
        </View>

        <Pressable onPress={handleModalOpen}>
          <AntDesign name="heart" size={24} color={colors.red} />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={propStyles.modalContainerBg}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={propStyles.modalContainerBody}>
                <Pressable onPress={handleModalClose}>
                  <Text>Close Modal</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}
