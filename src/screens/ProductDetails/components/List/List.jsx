import { useContext } from "react";
import { Text, FlatList } from "react-native";

import styles from "./styles";

import ListItem from "../ListItem/ListItem";

import pizzaList from "../../../../mock/pizzaList";
import ProductDetailsContext from "../../../../contexts/ProductDetails";

export default function List() {
  const { inputValue } = useContext(ProductDetailsContext);

  const filteredList = pizzaList.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return pizzaList.length ? (
    <FlatList
      data={filteredList}
      renderItem={({ item }) => <ListItem itemData={item} />}
      keyExtractor={(item, idx) => item.title + idx}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  ) : (
    <Text>Pizza list empty.</Text>
  );
}
