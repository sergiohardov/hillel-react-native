import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import useAppTheme from "./useAppTheme";
import useAppFonts from "./useAppFonts";

SplashScreen.preventAutoHideAsync();

export default function useApp() {
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useAppTheme();
  const { fontsLoaded, fontError } = useAppFonts();

  useEffect(() => {
    (async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded, fontError]);

  return {
    fontsLoaded,
    fontError,
    themeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
  };
}
