import { SafeAreaView, View } from "react-native";

import styles from "./styles";

import Slider from "../../components/Slider/Slider";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}
