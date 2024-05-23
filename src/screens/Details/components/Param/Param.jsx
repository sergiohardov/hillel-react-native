import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function Param({ title, value, direction }) {
  const propStyles = styles(direction);
  return (
    <View style={propStyles.container}>
      <Text style={propStyles.title}>{title}</Text>
      <Text style={propStyles.value}>{value}</Text>
    </View>
  );
}
