import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ActivityIndicator,
} from "react-native";
import Counter from "./components/Counter/Counter";
import Rating from "./components/Rating/Rating";
import Param from "./components/Param/Param";
import useDetails from "./hooks/useDetails";

import styles from "./styles";

export default function DetailsScreen({ route }) {
  const { themeMode, details, inLoading } = useDetails(route);
  const propStyles = styles(themeMode);

  return inLoading ? (
    <View style={propStyles.preloadContainer}>
      <ActivityIndicator />
    </View>
  ) : Object.keys(details).length ? (
    <View style={propStyles.container}>
      <ImageBackground
        source={{
          uri: details.image,
        }}
        resizeMode="contain"
        style={propStyles.image}
      />
      <View style={propStyles.detailsContainer}>
        <Text style={propStyles.detailsTitle}>{details.title}</Text>
        <View style={propStyles.priceContainer}>
          <Text style={propStyles.priceText}>${details.price}</Text>
          <Counter />
        </View>
        <View style={propStyles.paramsContainer}>
          <Param title={"Size"} value={details.size[0]} direction={"left"} />
          <Param
            title={"Calories"}
            value={`${details.calories} Kcal`}
            direction={"center"}
          />
          <Param
            title={"Cooking"}
            value={`${details.cooking} min`}
            direction={"right"}
          />
        </View>
        <View style={propStyles.aboutContainer}>
          <Text style={propStyles.aboutTitle}>About</Text>
          <Rating rating={details.rating} />
        </View>
        <Text style={propStyles.textDescription}>{details.description}</Text>
        <Pressable style={propStyles.cartBtnContainer}>
          <Text style={propStyles.cartBtnText}>
            Add to cart ${details.price}
          </Text>
        </Pressable>
      </View>
    </View>
  ) : (
    <View style={propStyles.preloadContainer}>
      <Text>No data for product</Text>
    </View>
  );
}
