import { View, Text, Image, Pressable } from "react-native";

import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../../constants/colors";
import useListItem from "../../hooks/useListItem";

export default function ListItem({ itemData }) {
  const { id, title, description, price, image } = itemData;

  const { wishlist, addWishlistCallback } = useListItem();

  const handleAddWishlist = (id, title) => addWishlistCallback(id, title);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textDescription} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.textPrice}>${price}</Text>

          <Pressable onPress={() => handleAddWishlist(id, title)}>
            <AntDesign
              name={wishlist.includes(id) ? "heart" : "hearto"}
              size={18}
              color={colors.red}
            />
          </Pressable>
        </View>
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
