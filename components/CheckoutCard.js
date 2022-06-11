import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  CheckoutCancelSvg,
  MinusBlackSvg,
  MinusSmallSvg,
  PlusBlackSvg,
  PlusSmallSvg,
} from "./Svg";

const CheckoutCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          source={require("../assets/images/bars.png")}
          resizeMode="contain"
        />
      </View>
      <View
        style={[
          styles.column,
          {
            marginLeft: 20,
            justifyContent: "space-between",
            alignItems: "flex-start",
          },
        ]}
      >
        <Text style={{ fontSize: 14, fontFamily: "EuclidCircularB-Bold" }}>
          Bonbon Maoam
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "EuclidCircularB-Regular",
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          1 litre x 6 (carton)
        </Text>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#F5F5F6",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: "#fff",
                borderColor: "#F5F5F6",
                borderWidth: 1,
              },
            ]}
          >
            <MinusSmallSvg />
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              fontWeight: "bold",
            }}
          >
            2
          </Text>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#FCC014" }]}
          >
            <PlusSmallSvg />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          styles.column,
          { justifyContent: "space-between", alignItems: "center" },
        ]}
      >
        <TouchableOpacity style={{ marginBottom: 20 }}>
          <CheckoutCancelSvg />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            marginTop: 20,
            fontFamily: "EuclidCircularB-Bold",
            color: "#FCC014",
          }}
        >
          12 000 F CFA
        </Text>
      </View>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 15,
  },
  column: {
    flex: 1,
  },
  btn: {
    height: 18,
    width: 23,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
