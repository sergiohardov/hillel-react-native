import { SafeAreaView, View } from "react-native";
import { SearchProvider } from "../../contexts/SearchContext";

import styles from "./styles";

import TopBar from "./components/TopBar/TopBar";
import Title from "./components/Title/Title";
import List from "./components/List/List";

export default function SearchScreen() {
  return (
    <SearchProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TopBar />
          <Title />
          <List />
        </View>
      </SafeAreaView>
    </SearchProvider>
  );
}
