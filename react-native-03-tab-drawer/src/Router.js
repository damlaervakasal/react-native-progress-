import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Fav from "./pages/Fav";
import Prod from "./pages/Prod";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProdTab" component={Prod} />
        <Tab.Screen name="FavTab" component={Fav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
