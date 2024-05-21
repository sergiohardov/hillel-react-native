import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/Home/HomeScreen";
import CartScreen from "./src/screens/Cart/CartScreen";
import SavedScreen from "./src/screens/Saved/SavedScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";

import useApp from "./src/hooks/useApp";
import useAppTheme from "./src/hooks/useAppTheme";
import AppContext from "./src/contexts/App";
import routes from "./src/constants/routes";
import theme from "./src/constants/theme";

import useAppFonts from "./src/hooks/useAppFonts";

const Tab = createBottomTabNavigator();

export default function App() {
  const { screenOptions } = useApp();
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useAppTheme();
  const { fontsLoaded, fontError } = useAppFonts();

  if (!fontsLoaded && !fontError) return null;

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
          screenOptions={screenOptions}
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
