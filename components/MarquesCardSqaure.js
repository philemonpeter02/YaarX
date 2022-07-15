import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartGreySvg, PlusSvg } from "./Svg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const MarquesCardSqaure = ({ img, subtitle, price }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[" rgba(53, 184, 200, 0.4)", "rgba(252, 192, 20, 0.5)"]}
      style={styles.containerGradient}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("MarquesDetail")}
        style={styles.container}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image source={img} resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default MarquesCardSqaure;

const styles = StyleSheet.create({
  containerGradient: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 99,
    width: 99,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
});
