import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HeartGreySvg, PlusSvg } from "./Svg";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProductCategoriesCard = ({ title, img, backgroundColor = "#F5F5F6" }) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[" rgba(53, 184, 200, 0.4)", "rgba(252, 192, 20, 0.5)"]}
      style={styles.containerGradient}
    >
      <TouchableOpacity
        // onPress={() => navigation.navigate("Details")}
        style={[styles.container, { backgroundColor: backgroundColor }]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            backgroundColor: backgroundColor,
          }}
        >
          <Image
            source={img}
            resizeMode="contain"
            style={{ height: 70, width: 70 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "#798184",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ProductCategoriesCard;

const styles = StyleSheet.create({
  containerGradient: {
    height: 122,
    width: 80,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: 121,
    width: 79,
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 5,
    overflow: "hidden",
  },
});
