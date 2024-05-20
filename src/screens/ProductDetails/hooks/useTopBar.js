import { useContext } from "react";
import AppContext from "../../../contexts/App";
import ProductDetailsContext from "../../../contexts/ProductDetails";
import { Alert, Linking } from "react-native";

export default function useTopBar() {
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useContext(AppContext);
  const { inputValue, setInputValue, modalVisible, setModalVisible } =
    useContext(ProductDetailsContext);

  const openUrlCallback = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return {
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
    inputValue,
    setInputValue,
    modalVisible,
    setModalVisible,
    openUrlCallback,
  };
}
