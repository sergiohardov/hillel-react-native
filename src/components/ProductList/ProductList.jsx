import { Text, FlatList } from "react-native";
import ProductItem from "../ProductItem/ProductItem";

import styles from "./styles";

import pizzaList from "../../mock/pizzaList";

export default function ProductList() {
  return pizzaList.length ? (
    <FlatList
      data={pizzaList}
      renderItem={({ item }) => <ProductItem itemData={item} />}
      keyExtractor={(_, idx) => idx}
      contentContainerStyle={styles.container}
    />
  ) : (
    <Text>Pizza list empty.</Text>
  );
}
