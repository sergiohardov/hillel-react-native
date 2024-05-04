import { useContext } from "react";
import { Text, FlatList } from "react-native";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./styles";

import pizzaList from "../../mock/pizzaList";
import SearchContext from "../../contexts/search";

export default function ProductList() {
  const { searchValue } = useContext(SearchContext);

  const filteredList = pizzaList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return pizzaList.length ? (
    <FlatList
      data={filteredList}
      renderItem={({ item }) => <ProductItem itemData={item} />}
      keyExtractor={(item, idx) => item.title + idx}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  ) : (
    <Text>Pizza list empty.</Text>
  );
}
