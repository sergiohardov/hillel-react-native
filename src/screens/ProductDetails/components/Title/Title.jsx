import { useContext } from "react";
import { Text } from "react-native";

import styles from "./styles";
import AppContext from "../../../../contexts/App";

export default function Title() {
  const { themeMode } = useContext(AppContext);
  const propStyles = styles(themeMode);

  return <Text style={propStyles.title}>Pizza</Text>;
}
