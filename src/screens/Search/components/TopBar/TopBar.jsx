import { useContext } from "react";
import { View, TextInput, Pressable } from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

import AppContext from "../../../../contexts/App";
import SearchContext from "../../../../contexts/SearchContext";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";
import routes from "../../../../constants/routes";
import { useNavigation } from "@react-navigation/native";

export default function TopBar() {
  const { themeMode } = useContext(AppContext);
  const { inputValue, setInputValue } = useContext(SearchContext);
  const navigation = useNavigation();

  const propStyles = styles(themeMode);

  const handleBtnBack = () => navigation.goBack();
  const handleSearchClear = () => setInputValue("");
  const handleBtnFilter = () => navigation.navigate(routes.filter);

  return (
    <>
      <View style={propStyles.container}>
        <Pressable onPress={handleBtnBack}>
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color={theme[themeMode].primary}
          />
        </Pressable>
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
        <Pressable onPress={handleBtnFilter}>
          <MaterialIcons name="filter-list" size={24} color={colors.red} />
        </Pressable>
      </View>
    </>
  );
}
