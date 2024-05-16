import { useContext } from "react";
import AppContext from "../../../contexts/App";
import ProductDetailsContext from "../../../contexts/ProductDetails";

export default function useTopBar() {
  const { colorSheme } = useContext(AppContext);
  const { inputValue, setInputValue, modalVisible, setModalVisible } = useContext(ProductDetailsContext);

  return { colorSheme, inputValue, setInputValue, modalVisible, setModalVisible };
}
