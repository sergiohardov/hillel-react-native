import { createContext, useState } from "react";

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
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
      {children}
    </SearchContext.Provider>
  );
};
