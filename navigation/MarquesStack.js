import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  CategoriesScreen,
  CategoryDetail,
  MarquesDetail,
  MarquesScreen,
} from "../screens";

export default function MarquesStackScreen() {
  const MarquesStack = createNativeStackNavigator();

  return (
    <MarquesStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <MarquesStack.Screen name="Marques" component={MarquesScreen} />
      <MarquesStack.Screen name="MarquesDetail" component={MarquesDetail} />
    </MarquesStack.Navigator>
  );
}
