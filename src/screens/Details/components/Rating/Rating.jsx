import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../../constants/colors";
export default function Rating({ rating }) {
  return (
    <View style={styles.container}>
      <AntDesign name="star" size={16} color={colors.yellow} />
      <Text style={styles.numbers}>{rating}</Text>
    </View>
  );
}
