import {
  View,
  TextInput,
  Pressable,
  Modal,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useContext, useState } from "react";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../constants/colors";
import SearchContext from "../../contexts/search";

export default function ProductTopBar() {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const [showSearch, setShowSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchClear = () => setSearchValue("");
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
              onChangeText={setSearchValue}
              value={searchValue}
            />
            {searchValue.length ? (
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
