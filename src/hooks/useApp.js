import { Ionicons } from "@expo/vector-icons";
import useAppTheme from "./useAppTheme";

import routes from "../constants/routes";
import colors from "../constants/colors";
import theme from "../constants/theme";

export default function useApp() {
  const { themeMode } = useAppTheme();

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

  return {
    screenOptions,
  };
}
