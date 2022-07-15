import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CategoriesSvgFilledBig } from "./Svg";

const CircleComponent = ({ title, svg }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinearGradient
        colors={[" rgba(53, 184, 200, 0.4)", "rgba(252, 192, 20, 0.5)"]}
        style={styles.circle}
      >
        <View style={styles.circleInner}>
          {svg ? <CategoriesSvgFilledBig /> : <Image />}
        </View>
      </LinearGradient>
      <Text style={[styles.text, { color: svg && "#35B8C8" }]}>{title}</Text>
    </View>
  );
};

export default CircleComponent;

const styles = StyleSheet.create({
  circle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  circleInner: {
    height: 58,
    width: 58,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontFamily: "EuclidCircularB-Regular",
    marginTop: 10,
  },
});
