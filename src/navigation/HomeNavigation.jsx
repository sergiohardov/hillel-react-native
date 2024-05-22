import { Text } from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BackButton from "../components/Buttons/BackButton";
import AppContext from "../contexts/App";
import routes from "../constants/routes";
import theme from "../constants/theme";

import {
  HomeScreen,
  FilterScreen,
  NotificationScreen,
  SearchScreen,
  SettingsScreen,
  DetailsScreen,
} from "../screens";

export default function HomeNavigation() {
  const navigation = useNavigation();
  const HomeStack = createNativeStackNavigator();
  const { themeMode } = useContext(AppContext);

  const HomeStackOptions = () => ({
    tabBarStyle: {
      backgroundColor: theme[themeMode].primaryBackground,
    },
    headerStyle: {
      backgroundColor: theme[themeMode].primaryBackground,
    },
    headerTitleStyle: {
      color: theme[themeMode].primary,
    },
    contentStyle: { backgroundColor: theme[themeMode].primaryBackground },
  });

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
        }}
      />
      <HomeStack.Screen
        name={routes.settings}
        component={SettingsScreen}
        options={{
          presentation: "modal",
        }}
      />
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
          headerShadowVisible: false,
          title: "Product Details",
          headerLeft: () => (
            <BackButton
              handleBtn={() => navigation.goBack()}
              color={theme[themeMode].primary}
            />
          ),
          headerRight: () => <Text>Fav</Text>,
        }}
      />
      <HomeStack.Screen
        name={routes.filter}
        component={FilterScreen}
        options={{
          headerShadowVisible: false,
          headerLeft: () => (
            <BackButton
              handleBtn={() => navigation.goBack()}
              color={theme[themeMode].primary}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}