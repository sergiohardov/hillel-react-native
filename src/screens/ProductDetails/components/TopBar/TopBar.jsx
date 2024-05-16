import { View, TextInput, Pressable } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Modal from "../../../../components/Modal/Modal";
import useTopBar from "../../hooks/useTopBar";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";

export default function TopBar() {
  const {
    themeMode,
    inputValue,
    setInputValue,
    modalVisible,
    setModalVisible,
  } = useTopBar();
  const propStyles = styles(themeMode);

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
            color={theme[themeMode].primary}
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
          <Ionicons
            name="settings-sharp"
            size={24}
            color={theme[themeMode].primary}
          />
        </Pressable>
      </View>

      <Modal
        title="Settings"
        modalVisible={modalVisible}
        handleModalClose={handleModalClose}
      ></Modal>
    </>
  );
}
