import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ProductItem({ itemData }) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{itemData.title}</Text>
        <Text style={styles.textDescription} numberOfLines={2}>
          {itemData.description}
        </Text>
        <Text style={styles.textPrice}>{itemData.price}</Text>
      </View>
      <View style={styles.mediaContainer}>
        <Image
          style={styles.mediaImage}
          source={{
            uri: itemData.image,
          }}
        />
      </View>
    </View>
  );
}
