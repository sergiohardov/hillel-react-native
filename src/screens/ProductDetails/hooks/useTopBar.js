import { useContext } from "react";
import AppContext from "../../../contexts/App";
import ProductDetailsContext from "../../../contexts/ProductDetails";

export default function useTopBar() {
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useContext(AppContext);
  const { inputValue, setInputValue, modalVisible, setModalVisible } =
    useContext(ProductDetailsContext);

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
  };
}
