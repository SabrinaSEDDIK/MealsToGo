import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { MapScreen } from "./src/features/map/screens/map.screen";
import { SettingsScreen } from "./src/features/settings/screens/settings.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index.js";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  const MyTabs = () => {
    return (
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MyTabs />
        <ExpoStatusBar />
      </ThemeProvider>
    </NavigationContainer>
  );
}
