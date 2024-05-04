import { View } from "react-native";
import ProductList from "../../components/ProductList/ProductList";

import styles from "./styles";
import ProductTopBar from "../../components/ProductTopBar/ProductTopBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <ProductTopBar />
    </View>
  );
}
