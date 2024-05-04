import { View } from "react-native";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import ProductTopBar from "../../components/ProductTopBar/ProductTopBar";
import ProductList from "../../components/ProductList/ProductList";

import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <ProductTopBar />
      <ProductTitle />
      <ProductList />
    </View>
  );
}
