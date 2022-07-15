import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { EyeSvg } from "./Svg";

const PurchaseHistoryListBoxRight = () => {
  return (
    <View style={styles.box}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
          N° de la commande
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          XXXXX
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0, 136, 151, 0.27)",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
          Date de commande
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          12/10/2022{" "}
          <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
            à 13:12
          </Text>
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0, 136, 151, 0.27)",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
          Date de livraison
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          12/10/2022{" "}
          <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
            à 13:12
          </Text>
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0, 136, 151, 0.27)",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
          Nombre de produits
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          15
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0, 136, 151, 0.27)",
          marginVertical: 10,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 5,
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}>
          Coût
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          350 000 F CFA
        </Text>
      </View>
      <Btn />
    </View>
  );
};

export default PurchaseHistoryListBoxRight;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 10,
  },
});

const Btn = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 136, 151, 0.64)",
          height: 44,
          width: "100%",
          paddingHorizontal: 15,
          borderRadius: 5,
          marginTop: 15,
        }}
      >
        <EyeSvg />
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "EuclidCircularB-Regular",
          }}
        >
          Voir la commande
        </Text>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "rgba(0, 136, 151, 0.27)",
          marginTop: 25,
        }}
      />
    </>
  );
};
