import { useContext } from "react";
import { Alert } from "react-native";
import ProductDetailsContext from "../../../contexts/ProductDetails";

export default function useListItem() {
  const { wishlist, setWishlist } = useContext(ProductDetailsContext);

  const addWishlistCallback = (id, title) => {
    if (wishlist.includes(id)) {
      Alert.alert(`Remove "${title}" from wishlist?`, "", [
        {
          text: "Yes",
          onPress: () =>
            setWishlist((prevState) => prevState.filter((item) => item !== id)),
        },
        {
          text: "No",
          onPress: () => {},
          style: "destructive",
        },
      ]);
    } else {
      setWishlist((prevState) => [...prevState, id]);
    }
  };

  return { wishlist, setWishlist, addWishlistCallback };
}
