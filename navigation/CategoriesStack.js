import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { CategoriesScreen, CategoryDetail } from "../screens";

export default function CategoriesStackScreen() {
  const CategoriesStack = createNativeStackNavigator();

  return (
    <CategoriesStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <CategoriesStack.Screen name="Categories" component={CategoriesScreen} />
      <CategoriesStack.Screen
        name="CategoriesDetails"
        component={CategoryDetail}
      />
    </CategoriesStack.Navigator>
  );
}
