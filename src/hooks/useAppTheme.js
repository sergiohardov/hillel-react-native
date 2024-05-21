import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";

export default function useAppTheme() {
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

  return {
    themeMode,
    setThemeMode,
    autoTheme,
    setAutoTheme,
    darkMode,
    setDarkMode,
  };
}
