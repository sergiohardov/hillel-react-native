import { View, Text, Switch } from "react-native";
import React, { useContext } from "react";

import styles from "./styles";
import AppContext from "../../contexts/App";

export default function SettingsScreen() {
  const { themeMode, autoTheme, setAutoTheme, darkMode, setDarkMode } =
    useContext(AppContext);

  const propStyles = styles(themeMode);

  return (
    <View style={propStyles.container}>
      <View style={propStyles.settingContainer}>
        <Text style={propStyles.settingText}>Auto detect theme</Text>
        <Switch
          onValueChange={setAutoTheme}
          value={autoTheme}
          disabled={darkMode}
        />
      </View>
      <View style={propStyles.settingContainer}>
        <Text style={propStyles.settingText}>Enable dark mode</Text>
        <Switch
          onValueChange={setDarkMode}
          value={darkMode}
          disabled={autoTheme}
        />
      </View>
    </View>
  );
}
