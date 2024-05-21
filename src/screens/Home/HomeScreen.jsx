import { SafeAreaView, ScrollView } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import Slider from "../../components/Slider/Slider";

import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TopBar navigation={navigation} />
        <Slider />
      </ScrollView>
    </SafeAreaView>
  );
}
