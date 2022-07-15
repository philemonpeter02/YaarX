import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CategorySelection,
  Info,
  OtpVerification,
  PhoneVerification,
  RegistrationSuccessScreen,
  SplashScreen,
} from "../screens";
import TabNavigator from "./TabNavigator";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Phone" component={PhoneVerification} />
      <Stack.Screen name="Otp" component={OtpVerification} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="CategorySelection" component={CategorySelection} />
      <Stack.Screen
        name="RegistrationSuccess"
        component={RegistrationSuccessScreen}
      />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
