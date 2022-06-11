import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  Checkout,
  HomeScreen,
  PaymentDetails,
  PaymentSuccessScreen,
  ProductDetailScreen,
  PurchaseHistoryScreen,
} from "../screens";

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={ProductDetailScreen} />
      <HomeStack.Screen name="Checkout" component={Checkout} />
      <HomeStack.Screen name="PaymentDetails" component={PaymentDetails} />
      <HomeStack.Screen
        name="PurchaseHistory"
        component={PurchaseHistoryScreen}
      />
      <HomeStack.Screen
        name="PaymentSuccess"
        component={PaymentSuccessScreen}
      />
    </HomeStack.Navigator>
  );
}
