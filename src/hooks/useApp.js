import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import routes from "../constants/routes";
import colors from "../constants/colors";
import theme from "../constants/theme";

export default function useApp() {
  const colorSheme = useColorScheme();

  const [themeMode, setThemeMode] = useState("light");
  const [autoTheme, setAutoTheme] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const screenOptions = ({ route }) => ({
    tabBarStyle: {
      backgroundColor: theme[themeMode].secondary,
    },
    headerStyle: {
      backgroundColor: "transparent",
    },
    headerTitleStyle: {
      color: theme[themeMode].primary,
    },
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      switch (route.name) {
        case routes.home:
          iconName = "home";
          break;
        case routes.cart:
          iconName = "cart";
          break;
        case routes.saved:
          iconName = "heart";
          break;
        case routes.profile:
          iconName = "person";
          break;
        default:
          iconName = "home";
          break;
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.red,
    tabBarInactiveTintColor: colors.gray_light,
  });

  useEffect(() => {
    if (darkMode) {
      setThemeMode("dark");
    } else if (autoTheme) {
      setThemeMode(colorSheme);
    } else {
      setThemeMode("light");
    }
  }, [autoTheme, darkMode, colorSheme]);

  return {
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
    screenOptions,
  };
}
