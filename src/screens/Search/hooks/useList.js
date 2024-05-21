import { useCallback, useContext, useEffect } from "react";
import SearchContext from "../../../contexts/SearchContext";
import {
  nextPizzaList,
  pizzaList,
  updatePizzaList,
} from "../../../mock/pizzaList";

export default function useList() {
  const {
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
    page,
    setPage,
  } = useContext(SearchContext);

  useEffect(() => {
    setListLoading(true);

    setTimeout(() => {
      setListData(pizzaList);
      setListLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setFilteredList(
      listData.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [listData, inputValue]);

  const onRefreshCallback = useCallback(() => {
    setRefreshLoading(true);

    setTimeout(() => {
      setPage(1);
      setRefreshLoading(false);
      setListData(updatePizzaList);
    }, 3000);
  }, []);

  const endReachedCallback = () => {
    if (page > 1) return;
    setAdditionalLoading(true);

    setPage((prevState) => prevState + 1);

    setTimeout(() => {
      setListData((prevState) => [...prevState, ...nextPizzaList]);
      setAdditionalLoading(false);
    }, 2000);
  };

  return {
    listLoading,
    refreshLoading,
    additionalLoading,
    filteredList,
    onRefreshCallback,
    endReachedCallback,
  };
}
