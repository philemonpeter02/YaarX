import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeSvg,
  HomeSvgOutline,
  MessagesOutlineSvg,
  ProfileOutlineSvg,
  PromoOutlineSvg,
  SvgPhone,
} from "../components/Svg";
import {
  CallerScreen,
  MessagesScreen,
  ProfileScreen,
  PromosScreen,
} from "../screens";
import HomeStackScreen from "./HomeStack";
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Promos" component={PromosScreen} />
      <Tab.Screen name="Caller" component={CallerScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            onPress={() => onPress()}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? <HomeSvg /> : <HomeSvgOutline />}
                <Text style={styles.text}>Accueil</Text>
              </View>
            )}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? <PromoOutlineSvg /> : <PromoOutlineSvg />}
                <Text style={styles.text}>Promos</Text>
              </View>
            )}
            {index === 2 && (
              <View style={styles.icon}>
                <SvgPhone />
              </View>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? <MessagesOutlineSvg /> : <MessagesOutlineSvg />}
                <Text style={styles.text}>Messages</Text>
              </View>
            )}
            {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? <ProfileOutlineSvg /> : <ProfileOutlineSvg />}
                <Text style={styles.text}>Compte</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  icon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "EuclidCircularB-Regular",
    fontSize: 12,
    fontWeight: "300",
    color: "rgba(0,0,0,0.6)",
  },
});
