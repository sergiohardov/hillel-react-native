import { useFonts } from "expo-font";

export default function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts({
    "WorkSans-Bold": require("../../assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/WorkSans-Medium.ttf"),
    "WorkSans-Regular": require("../../assets/fonts/WorkSans-Regular.ttf"),
  });

  return { fontsLoaded, fontError };
}
