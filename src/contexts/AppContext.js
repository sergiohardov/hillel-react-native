import { createContext } from "react";
import useAppTheme from "../hooks/useAppTheme";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useAppTheme();

  return (
    <AppContext.Provider
      value={{
        themeMode,
        autoTheme,
        setAutoTheme,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
