import {
  View,
  TextInput,
  Pressable,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../constants/colors";

export default function ProductTopBar() {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchClear = () => setSearchText("");
  const handleBtnSearch = () => setShowSearch(!showSearch);
  const handleBtnFav = () => setModalVisible(true);

  return (
    <>
      <View style={styles.container}>
        {showSearch ? (
          <View style={styles.inputContainer}>
            <EvilIcons
              name="search"
              size={24}
              color={colors.black}
              style={styles.inputIconSearch}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={setSearchText}
              value={searchText}
            />
            {searchText.length ? (
              <Pressable
                onPress={handleSearchClear}
                style={styles.inputBtnClose}
              >
                <EvilIcons name="close" size={24} color={colors.red} />
              </Pressable>
            ) : null}
          </View>
        ) : null}

        <Pressable onPress={handleBtnFav}>
          <AntDesign name="heart" size={24} color={colors.red} />
        </Pressable>

        <Pressable onPress={handleBtnSearch}>
          <AntDesign name="search1" size={24} color={colors.black} />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainerBg}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.modalContainerBody}>
                <Pressable onPress={() => setModalVisible(false)}>
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
