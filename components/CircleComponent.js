import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CircleComponent = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.circle} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CircleComponent;

const styles = StyleSheet.create({
  circle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    borderColor: "#35B8C8",
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: "EuclidCircularB-Regular",
    marginTop: 10,
  },
});
