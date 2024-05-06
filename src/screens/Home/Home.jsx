import { useState } from "react";
import { View } from "react-native";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ProductTopBar from "../../components/ProductTopBar/ProductTopBar";
import ProductList from "../../components/ProductList/ProductList";

import styles from "./styles";

import SearchContext from "../../contexts/search";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <View style={styles.container}>
        <ProductTopBar />
        <ProductTitle />
        <ProductList />
      </View>
    </SearchContext.Provider>
  );
}
