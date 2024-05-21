import { View, Text, Image, Pressable } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

import useListItem from "../../hooks/useListItem";

import styles from "./styles";
import colors from "../../../../constants/colors";
import theme from "../../../../constants/theme";
import routes from "../../../../constants/routes";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({ itemData }) {
  const { id, title, description, price, image } = itemData;
  const { themeMode, wishlist, addWishlistCallback, shareCallback } =
    useListItem();
  const navigation = useNavigation();
  const propStyles = styles(themeMode);

  const handleAddWishlist = (id, title) => addWishlistCallback(id, title);
  const handleShare = (title, description) => shareCallback(title, description);
  const handleItemOpen = (id) =>
    navigation.navigate(routes.details, { productId: id });

  return (
    <Pressable onPress={() => handleItemOpen(id)}>
      <View style={propStyles.container}>
        <View style={propStyles.textContainer}>
          <Text style={propStyles.textTitle}>{title}</Text>
          <Text style={propStyles.textDescription} numberOfLines={2}>
            {description}
          </Text>
          <View style={propStyles.priceContainer}>
            <Text style={propStyles.textPrice}>${price}</Text>

            <Pressable onPress={() => handleAddWishlist(id, title)}>
              <AntDesign
                name={wishlist.includes(id) ? "heart" : "hearto"}
                size={18}
                color={colors.red}
              />
            </Pressable>

            <Pressable onPress={() => handleShare(title, description)}>
              <EvilIcons
                name="share-google"
                size={24}
                color={theme[themeMode].primary}
              />
            </Pressable>
          </View>
        </View>
        <View style={propStyles.mediaContainer}>
          <Image
            style={propStyles.mediaImage}
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
    </Pressable>
  );
}
