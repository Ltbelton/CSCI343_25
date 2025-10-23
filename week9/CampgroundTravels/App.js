import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import CampgroundsOverviewScreen from "./screens/CampgroundsOverviewScreen";

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we load resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  // Fonts + splash handling
  const [loaded] = Font.useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Don’t render until fonts are ready
  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary800 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Campground Locations" }}
          />
          <Stack.Screen
            name="CampgroundsOverview"
            component={CampgroundsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  screenOptions: {
    headerStyle: {backgroundColor: Colors.primary500},
    headerTintColor: Colors.primary300,
    headerTitleStyle: {fontfamily: "Camp", fontSize: 40},
    contentStyle: {backgroundColor: Colors.primary800},
  },
});
