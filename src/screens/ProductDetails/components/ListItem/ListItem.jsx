import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function ListItem({ itemData }) {
  const { title, description, price, image } = itemData;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDescription} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.textPrice}>${price}</Text>
      </View>
      <View style={styles.mediaContainer}>
        <Image
          style={styles.mediaImage}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
}
