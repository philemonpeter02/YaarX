import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  CategoriesScreen,
  CategoryDetail,
  EditProfile,
  FavouritesScreen,
  MarquesDetail,
  MarquesScreen,
  NotificationsScreen,
  ProfileScreen,
  SupportScreen,
} from "../screens";

export default function ProfileStackScreen() {
  const ProfileStack = createNativeStackNavigator();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Support" component={SupportScreen} />
      <ProfileStack.Screen
        name="Notifications"
        component={NotificationsScreen}
      />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Favourites" component={FavouritesScreen} />
    </ProfileStack.Navigator>
  );
}
