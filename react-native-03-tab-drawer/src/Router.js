import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Fav from "./pages/Fav";
import Prod from "./pages/Prod";

// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProdTab" component={Prod} />
        <Drawer.Screen name="FavTab" component={Fav} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
