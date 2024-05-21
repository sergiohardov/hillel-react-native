import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles from "./styles";

import TopBar from "./components/TopBar/TopBar";
import Title from "./components/Title/Title";
import List from "./components/List/List";

import SearchContext from "../../contexts/SearchContext";

export default function SearchScreen({ navigation }) {
  const [listLoading, setListLoading] = useState(false);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [additionalLoading, setAdditionalLoading] = useState(false);

  const [listData, setListData] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SearchContext.Provider
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
        wishlist,
        setWishlist,
        inputValue,
        setInputValue,
        page,
        setPage,
        modalVisible,
        setModalVisible,
      }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TopBar navigation={navigation} />
          <Title />
          <List />
        </View>
      </SafeAreaView>
    </SearchContext.Provider>
  );
}
