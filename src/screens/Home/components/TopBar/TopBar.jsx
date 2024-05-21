import { useContext } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import AppContext from "../../../../contexts/App";
import styles from "./styles";
import theme from "../../../../constants/theme";
import colors from "../../../../constants/colors";
import routes from "../../../../constants/routes";

export default function TopBar({ navigation }) {
  const { themeMode } = useContext(AppContext);
  const propStyles = styles(themeMode);

  const handleBtnNotifications = () => navigation.navigate(routes.notification);
  const handleBtnSearch = () => navigation.navigate(routes.search);

  return (
    <View style={propStyles.container}>
      <View style={propStyles.header}>
        <Text style={propStyles.title}>Explore Pizza Club</Text>

        <Pressable onPress={handleBtnNotifications}>
          <Feather name="bell" size={24} color={theme[themeMode].primary} />
        </Pressable>
      </View>

      <Pressable style={propStyles.inputContainer} onPress={handleBtnSearch}>
        <MaterialIcons name="search" size={24} color={colors.gray_light} />
        <Text style={propStyles.input}>Search Food</Text>
        <MaterialIcons name="filter-list" size={24} color={colors.red} />
      </Pressable>
    </View>
  );
}
