import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function BackButton({ handleBtn, color }) {
  return (
    <Pressable onPress={handleBtn}>
      <MaterialIcons name="arrow-back-ios" size={18} color={color} />
    </Pressable>
  );
}
