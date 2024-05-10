import { View } from "react-native";

import styles from "./styles";

import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}
