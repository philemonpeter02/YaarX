import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CategoriesSvg,
  CategoriesSvgFilled,
  HomeSvg,
  HomeSvgOutline,
  MessagesOutlineSvg,
  ProfileOutlineSvg,
  PromoOutlineSvg,
  SvgMarques,
  SvgMarquesFilled,
  SvgPhone,
} from "../components/Svg";
import {
  CallerScreen,
  CategoriesScreen,
  MessagesScreen,
  ProfileScreen,
  PromosScreen,
} from "../screens";
import HomeStackScreen from "./HomeStack";
import call from "react-native-phone-call";
import CategoriesStackScreen from "./CategoriesStack";
import MarquesStackScreen from "./MarquesStack";
import ProfileStackScreen from "./ProfileStack";

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
      <Tab.Screen name="Categories" component={CategoriesStackScreen} />
      <Tab.Screen name="Caller" component={CallerScreen} />
      <Tab.Screen name="Marques" component={MarquesStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
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
        const triggerCall = () => {
          // // Check for perfect 10 digit length
          // if (inputValue.length != 10) {
          //   alert('Please insert correct contact number');
          //   return;
          // }

          const args = {
            number: "12345678910",
            prompt: true,
          };
          // Make a call
          call(args).catch(console.error);
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
                {isFocused ? <CategoriesSvgFilled /> : <CategoriesSvg />}
                <Text style={styles.text}>Catégories</Text>
              </View>
            )}
            {index === 2 && (
              <TouchableOpacity onPress={triggerCall} style={styles.icon}>
                <SvgPhone />
              </TouchableOpacity>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? <SvgMarquesFilled /> : <SvgMarques />}
                <Text style={styles.text}>Marques</Text>
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
