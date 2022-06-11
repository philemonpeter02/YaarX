import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartGreySvg, PlusSvg } from "./Svg";
import { useNavigation } from "@react-navigation/native";

const ProductCardSqaure = ({ title, subtitle, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details")}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Image
          source={require("../assets/images/productsq.png")}
          resizeMode="contain"
        />
        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: "EuclidCircularB-Regular" }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {subtitle}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: "300",
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HeartGreySvg />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FCC014",
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlusSvg />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardSqaure;

const styles = StyleSheet.create({
  container: {
    height: 144,
    width: 144,
    backgroundColor: "#F5F5F6",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
});
