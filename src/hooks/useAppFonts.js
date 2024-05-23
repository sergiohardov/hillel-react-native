import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts({
    "WorkSans-Bold": require("../../assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("../../assets/fonts/WorkSans-Regular.ttf"),
  });

  useEffect(() => {
    (async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded, fontError]);

  return { fontsLoaded, fontError };
}
