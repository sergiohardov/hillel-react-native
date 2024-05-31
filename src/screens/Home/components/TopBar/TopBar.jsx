import { useCallback, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons, Feather, Ionicons } from "@expo/vector-icons";

import { AppContext } from "../../../../contexts/AppContext";
import styles from "./styles";
import theme from "../../../../constants/theme";
import colors from "../../../../constants/colors";
import routes from "../../../../constants/routes";

export default function TopBar({ navigation }) {
  const { themeMode } = useContext(AppContext);
  const propStyles = styles(themeMode);

  const handleBtnNotifications = useCallback(
    () => navigation.navigate(routes.notification),
    []
  );
  const handleBtnSettings = useCallback(
    () => navigation.navigate(routes.settings),
    []
  );
  const handleBtnSearch = useCallback(
    () => navigation.navigate(routes.search),
    []
  );

  return (
    <View style={propStyles.container}>
      <View style={propStyles.header}>
        <Text style={propStyles.title}>Explore Pizza Club</Text>

        <View style={propStyles.controllsContainer}>
          <Pressable onPress={handleBtnNotifications}>
            <Feather name="bell" size={24} color={theme[themeMode].primary} />
          </Pressable>

          <Pressable onPress={handleBtnSettings}>
            <Ionicons
              name="settings-sharp"
              size={24}
              color={theme[themeMode].primary}
            />
          </Pressable>
        </View>
      </View>

      <Pressable style={propStyles.inputContainer} onPress={handleBtnSearch}>
        <MaterialIcons name="search" size={24} color={colors.gray_light} />
        <Text style={propStyles.input}>Search Food</Text>
        <MaterialIcons name="filter-list" size={24} color={colors.red} />
      </Pressable>
    </View>
  );
}
