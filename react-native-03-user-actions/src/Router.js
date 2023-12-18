import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignUpResults from "./pages/SignUpResults";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen
          name="SignUpResults"
          component={SignUpResults}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
