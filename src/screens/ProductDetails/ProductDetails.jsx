import { useState } from "react";
import { View } from "react-native";

import TopBar from "./components/TopBar/TopBar";
import Title from "./components/Title/Title";
import List from "./components/List/List";

import styles from "./styles";

import ProductDetailsContext from "../../contexts/ProductDetails";

export default function ProductDetails() {
  const [inputValue, setInputValue] = useState("");

  return (
    <ProductDetailsContext.Provider value={{ inputValue, setInputValue }}>
      <View style={styles.container}>
        <TopBar />
        <Title />
        <List />
      </View>
    </ProductDetailsContext.Provider>
  );
}
