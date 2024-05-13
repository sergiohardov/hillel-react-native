import { Text, FlatList, ActivityIndicator, View } from "react-native";
import ListItem from "../ListItem/ListItem";
import useList from "../../hooks/useList";
import styles from "./styles";

export default function List() {
  const {
    listLoading,
    refreshLoading,
    additionalLoading,
    filteredList,
    onRefreshCallback,
    endReachedCallback,
  } = useList();

  const handleRefresh = () => onRefreshCallback();
  const handleEndReached = () => endReachedCallback();

  return listLoading ? (
    <ActivityIndicator style={{ marginTop: "70%" }} />
  ) : filteredList.length ? (
    <FlatList
      data={filteredList}
      renderItem={({ item }) => <ListItem itemData={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      style={styles.list}
      refreshing={refreshLoading}
      onEndReachedThreshold={0.2}
      onEndReached={handleEndReached}
      onRefresh={handleRefresh}
      ListFooterComponent={() =>
        additionalLoading ? <ActivityIndicator /> : null
      }
    />
  ) : (
    <Text>Pizza list empty.</Text>
  );
}
