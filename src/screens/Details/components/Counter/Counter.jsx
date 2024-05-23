import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../../../constants/colors";

export default function Counter() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.counterBtn}>
        <AntDesign name="plus" size={16} color={colors.gray_dark} />
      </Pressable>
      <Text style={styles.counterNum}>1</Text>
      <Pressable style={styles.counterBtn}>
        <AntDesign name="minus" size={16} color={colors.gray_dark} />
      </Pressable>
    </View>
  );
}
