import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartGreySvg, MinuSvg, PlusSvg } from "./Svg";

const ProductCardVertical = ({ title, subtitle, price }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          //   paddingVertical: 10,
        }}
      >
        <Image
          source={require("../assets/images/productVertical.png")}
          style={{ width: 100 }}
          resizeMode="contain"
        />
        <View
          style={{
            paddingTop: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "EuclidCircularB-Medium",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              marginBottom: 15,
            }}
          >
            {subtitle}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.8)",
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {price}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Bold",
              color: "#008897",
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: 40,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <MinuSvg />
        </TouchableOpacity>
        <Text
          style={{ fontSize: 16, fontWeight: "bold", marginHorizontal: 15 }}
        >
          2
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FCC014",
            width: 40,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <PlusSvg />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardVertical;

const styles = StyleSheet.create({
  container: {
    height: 245,
    width: 155,
    backgroundColor: "#F5F5F6",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
  },
});
