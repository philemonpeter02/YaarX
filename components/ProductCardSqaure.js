import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartGreySvg, PlusSvg } from "./Svg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProductCardSqaure = ({ title, subtitle, price }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[" rgba(53, 184, 200, 0.4)", "rgba(252, 192, 20, 0.5)"]}
      style={styles.containerGradient}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={styles.container}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 10,
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("../assets/images/productsq.png")}
              resizeMode="contain"
            />
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
              <Text
                style={{ fontSize: 14, fontFamily: "EuclidCircularB-Regular" }}
              >
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
          </View>
        </View>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            height: 1,
            width: "90%",
            alignSelf: "center",
            marginVertical: 5,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Bold",
              color: "rgba(0, 136, 151, 1)",
              marginLeft: 10,
            }}
          >
            {price}
          </Text>
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
    </LinearGradient>
  );
};

export default ProductCardSqaure;

const styles = StyleSheet.create({
  containerGradient: {
    height: 164,
    width: 144,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 162,
    width: 142,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 5,
    overflow: "hidden",
  },
});
