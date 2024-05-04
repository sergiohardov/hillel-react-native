import { Text, FlatList } from "react-native";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./styles";

import pizzaList from "../../mock/pizzaList";

export default function ProductList() {
  return pizzaList.length ? (
    <FlatList
      data={pizzaList}
      renderItem={({ item }) => <ProductItem itemData={item} />}
      keyExtractor={(item, idx) => item.title + idx}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  ) : (
    <Text>Pizza list empty.</Text>
  );
}
