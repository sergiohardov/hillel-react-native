import { Pressable, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/Home/HomeScreen";
import CartScreen from "./src/screens/Cart/CartScreen";
import SavedScreen from "./src/screens/Saved/SavedScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import FilterScreen from "./src/screens/Filter/FilterScreen";
import NotificationScreen from "./src/screens/Notification/NotificationScreen";
import SearchScreen from "./src/screens/Search/SearchScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import DetailsScreen from "./src/screens/Details/DetailsScreen";

import useApp from "./src/hooks/useApp";
import AppContext from "./src/contexts/App";
import routes from "./src/constants/routes";
import theme from "./src/constants/theme";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const {
    fontsLoaded,
    fontError,
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
    AppTabOptions,
    HomeStackOptions,
  } = useApp();

  if (!fontsLoaded && !fontError) return null;

  const HomeStackScreen = () => {
    const navigation = useNavigation();

    return (
      <HomeStack.Navigator screenOptions={HomeStackOptions}>
        <HomeStack.Screen
          name={routes.home}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name={routes.notification}
          component={NotificationScreen}
          options={{
            presentation: "modal",
            headerShadowVisible: true,
          }}
        />
        <HomeStack.Screen
          name={routes.settings}
          component={SettingsScreen}
          options={{
            presentation: "modal",
            headerShadowVisible: true,
          }}
        />
        <HomeStack.Screen name={routes.filter} component={FilterScreen} />
        <HomeStack.Screen
          name={routes.search}
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name={routes.details}
          component={DetailsScreen}
          options={{
            title: "Product Details",
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Text>Back</Text>
              </Pressable>
            ),
            headerRight: () => <Text>Fav</Text>,
          }}
        />
      </HomeStack.Navigator>
    );
  };

  return (
    <AppContext.Provider
      value={{ themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode }}
    >
      <StatusBar style={theme[themeMode].statusBarStyle} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={AppTabOptions}
          sceneContainerStyle={{
            backgroundColor: theme[themeMode].primaryBackground,
          }}
        >
          <Tab.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{ headerShown: false, title: "Home" }}
          />
          <Tab.Screen name={routes.cart} component={CartScreen} />
          <Tab.Screen name={routes.saved} component={SavedScreen} />
          <Tab.Screen name={routes.profile} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
