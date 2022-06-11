import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CartBlackSvg,
  EyeSvg,
  HeartWhiteSvg,
  MinusBlackSvg,
  PlusBlackSvg,
  PlusGreenSvg,
  RecordSvg,
  SvgBackArrow,
} from "../components/Svg";
import PurchaseHistoryListBox from "../components/PurchaseHistoryListBox";

const PurchaseHistoryScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgBackArrow />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              marginLeft: 25,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Mes commandes
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View
            style={{
              flexDirection: "row",
              width: 270,
              height: 44,
              borderRadius: 5,
              backgroundColor: "rgba(0, 136, 151, 0.15)",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FCC014",
                borderRadius: 5,
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: "EuclidCircularB-Bold" }}
              >
                En cours
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Regular",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                Livrées
              </Text>
            </TouchableOpacity>
          </View>
          <PurchaseHistoryListBox />
          <Btn />
          <PurchaseHistoryListBox />
          <Btn />
          <PurchaseHistoryListBox />
          <Btn />
          <PurchaseHistoryListBox />
          <Btn />
          <View style={{ width: "100%", height: 80 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PurchaseHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35B8C8",
  },
  topContainer: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 25,
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
          paddingHorizontal: 15,
          borderRadius: 5,
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
