import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/Home/HomeScreen";
import CartScreen from "./src/screens/Cart/CartScreen";
import SavedScreen from "./src/screens/Saved/SavedScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";

import AppContext from "./src/contexts/App";
import routes from "./src/constants/routes";
import theme from "./src/constants/theme";
import colors from "./src/constants/colors";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorSheme = useColorScheme();

  const [themeMode, setThemeMode] = useState("light");
  const [autoTheme, setAutoTheme] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setThemeMode("dark");
    } else if (autoTheme) {
      setThemeMode(colorSheme);
    } else {
      setThemeMode("light");
    }
  }, [autoTheme, darkMode, colorSheme]);

  return (
    <AppContext.Provider
      value={{ themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode }}
    >
      <StatusBar style={theme[themeMode].statusBarStyle} />
      <NavigationContainer>
        <Tab.Navigator
          sceneContainerStyle={{
            backgroundColor: theme[themeMode].primaryBackground,
          }}
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: theme[themeMode].secondary,
            },
            headerStyle: {
              backgroundColor: 'transparent',
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
          })}
        >
          <Tab.Screen name={routes.home} component={HomeScreen} />
          <Tab.Screen name={routes.cart} component={CartScreen} />
          <Tab.Screen name={routes.saved} component={SavedScreen} />
          <Tab.Screen name={routes.profile} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
