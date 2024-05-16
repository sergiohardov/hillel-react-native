import { useContext } from "react";
import { Text } from "react-native";

import styles from "./styles";
import AppContext from "../../../../contexts/App";

export default function Title() {
  const { colorSheme } = useContext(AppContext);
  const propStyles = styles(colorSheme);

  return <Text style={propStyles.title}>Pizza</Text>;
}
