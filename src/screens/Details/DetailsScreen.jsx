import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../contexts/App";
import { allPizza } from "../../mock/pizzaList";

import styles from "./styles";
import Counter from "./components/Counter/Counter";
import Rating from "./components/Rating/Rating";
import Param from "./components/Param/Param";

export default function DetailsScreen({ route }) {
  const [details, setDetails] = useState({});
  const { themeMode } = useContext(AppContext);
  const { productId } = route.params;

  const propStyles = styles(themeMode);

  useEffect(() => {
    const details = allPizza.find((item) => item.id === productId);
    setDetails(details);
  }, []);

  return Object.keys(details).length ? (
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
  ) : null;
}
