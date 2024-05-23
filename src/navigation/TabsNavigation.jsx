import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeNavigation from "./HomeNavigation";
import { AppContext } from "../contexts/AppContext";
import colors from "../constants/colors";
import theme from "../constants/theme";
import routes from "../constants/routes";

import { CartScreen, SavedScreen, ProfileScreen } from "../screens";

export default function TabsNavigation() {
  const Tab = createBottomTabNavigator();
  const { themeMode } = useContext(AppContext);

  const AppTabOptions = ({ route }) => ({
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

  return (
    <Tab.Navigator
      screenOptions={AppTabOptions}
      sceneContainerStyle={{
        backgroundColor: theme[themeMode].primaryBackground,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigation}
        options={{ headerShown: false, title: "Home" }}
      />
      <Tab.Screen name={routes.cart} component={CartScreen} />
      <Tab.Screen name={routes.saved} component={SavedScreen} />
      <Tab.Screen name={routes.profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
