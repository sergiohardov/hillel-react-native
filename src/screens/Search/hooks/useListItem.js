import { useContext } from "react";
import { Alert, Share } from "react-native";
import SearchContext from "../../../contexts/SearchContext";
import { AppContext } from "../../../contexts/AppContext";

export default function useListItem() {
  const { themeMode } = useContext(AppContext);
  const { wishlist, setWishlist } = useContext(SearchContext);

  const addWishlistCallback = (id, title) => {
    if (wishlist.includes(id)) {
      Alert.alert(`Remove "${title}" from wishlist?`, "", [
        {
          text: "No",
          onPress: () => {},
          style: "destructive",
        },
        {
          text: "Yes",
          onPress: () =>
            setWishlist((prevState) => prevState.filter((item) => item !== id)),
        },
      ]);
    } else {
      setWishlist((prevState) => [...prevState, id]);
    }
  };

  const shareCallback = async (title, description) => {
    try {
      const result = await Share.share({
        message: `${title} | ${description}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return {
    themeMode,
    wishlist,
    setWishlist,
    addWishlistCallback,
    shareCallback,
  };
}
