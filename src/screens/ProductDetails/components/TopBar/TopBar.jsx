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

import AppContext from "../../../../contexts/App";
import ProductDetailsContext from "../../../../contexts/ProductDetails";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";

export default function TopBar() {
  const { colorSheme } = useContext(AppContext);
  const { inputValue, setInputValue } = useContext(ProductDetailsContext);
  const propStyles = styles(colorSheme);

  const [showSearch, setShowSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchClear = () => setInputValue("");
  const handleBtnSearch = () => setShowSearch(!showSearch);
  const handleBtnFav = () => setModalVisible(true);

  return (
    <>
      <View style={propStyles.container}>
        {showSearch ? (
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
        ) : null}

        <Pressable onPress={handleBtnFav}>
          <AntDesign name="heart" size={24} color={colors.red} />
        </Pressable>

        <Pressable onPress={handleBtnSearch}>
          <AntDesign
            name="search1"
            size={24}
            color={theme[colorSheme].primary}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={propStyles.modalContainerBg}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={propStyles.modalContainerBody}>
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
