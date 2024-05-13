import { useState } from "react";
import { View } from "react-native";

import styles from "./styles";

import TopBar from "./components/TopBar/TopBar";
import Title from "./components/Title/Title";
import List from "./components/List/List";

import ProductDetailsContext from "../../contexts/ProductDetails";

export default function ProductDetails() {
  const [listLoading, setListLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [additionalLoading, setAdditionalLoading] = useState(false);

  const [listData, setListData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  return (
    <ProductDetailsContext.Provider
      value={{
        listLoading,
        setListLoading,
        refreshLoading,
        setRefreshLoading,
        additionalLoading,
        setAdditionalLoading,

        listData,
        setListData,
        filteredList,
        setFilteredList,
        inputValue,
        setInputValue,
        page,
        setPage,
      }}
    >
      <View style={styles.container}>
        <TopBar />
        <Title />
        <List />
      </View>
    </ProductDetailsContext.Provider>
  );
}
