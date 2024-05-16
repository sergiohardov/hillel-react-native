import { View, TextInput, Pressable, Text, Switch } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Modal from "../../../../components/Modal/Modal";
import useTopBar from "../../hooks/useTopBar";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";

export default function TopBar() {
  const {
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
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
      >
        <View style={propStyles.modalContainer}>
          <View style={propStyles.modalSettingContainer}>
            <Text style={propStyles.modalSettingText}>Auto detect theme</Text>
            <Switch
              onValueChange={setAutoTheme}
              value={autoTheme}
              disabled={darkMode}
            />
          </View>
          <View style={propStyles.modalSettingContainer}>
            <Text style={propStyles.modalSettingText}>Enable dark mode</Text>
            <Switch
              onValueChange={setDarkMode}
              value={darkMode}
              disabled={autoTheme}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
