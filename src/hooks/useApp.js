import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

import useAppTheme from "./useAppTheme";
import useAppFonts from "./useAppFonts";

import routes from "../constants/routes";
import colors from "../constants/colors";
import theme from "../constants/theme";

SplashScreen.preventAutoHideAsync();

export default function useApp() {
  const { themeMode } = useAppTheme();
  const { fontsLoaded, fontError } = useAppFonts();

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
    (async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded, fontError]);

  return {
    screenOptions,
  };
}
