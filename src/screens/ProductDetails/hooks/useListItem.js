import { useContext } from "react";
import { Alert } from "react-native";
import ProductDetailsContext from "../../../contexts/ProductDetails";
import AppContext from "../../../contexts/App";

export default function useListItem() {
  const { colorSheme } = useContext(AppContext);
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

  return { colorSheme, wishlist, setWishlist, addWishlistCallback };
}
