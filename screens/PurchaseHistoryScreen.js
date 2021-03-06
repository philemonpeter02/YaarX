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
import PurchaseHistoryListBoxRight from "../components/PurchaseHistoryListBoxRight";

const PurchaseHistoryScreen = ({ navigation }) => {
  const [buttonState, setButtonState] = useState(1);
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
              onPress={() => setButtonState(1)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: buttonState === 1 ? "#FCC014" : null,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily:
                    buttonState === 1
                      ? "EuclidCircularB-Bold"
                      : "EuclidCircularB-Regular",
                }}
              >
                En cours
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setButtonState(2)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: buttonState === 2 ? "#FCC014" : null,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily:
                    buttonState === 2
                      ? "EuclidCircularB-Bold"
                      : "EuclidCircularB-Regular",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                Livr??es
              </Text>
            </TouchableOpacity>
          </View>
          {buttonState === 1 ? (
            <>
              <PurchaseHistoryListBox />
              <PurchaseHistoryListBox />
              <PurchaseHistoryListBox />
              <PurchaseHistoryListBox />
            </>
          ) : (
            <>
              <PurchaseHistoryListBoxRight />
              <PurchaseHistoryListBoxRight />
            </>
          )}
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
