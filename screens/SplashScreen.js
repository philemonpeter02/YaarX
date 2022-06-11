import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { SvgLogo } from "../components/Svg";
import Loader from "react-native-three-dots-loader";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Phone");
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <SvgLogo />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Nous facilitons les relations entre grossistes et détaillants
        </Text>
      </View>
      <Loader background="#fff" activeBackground="#FCC014" size={14} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#35B8C8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 250,
    marginVertical: 25,
  },
  text: {
    fontFamily: "EuclidCircularB-Regular",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
