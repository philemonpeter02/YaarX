import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PurchaseHistoryListBox = () => {
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
          Date
        </Text>
        <Text style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}>
          12/10/2022
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
    </View>
  );
};

export default PurchaseHistoryListBox;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 20,
  },
});
