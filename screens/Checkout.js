import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusGreenSvg, RecordSvg, SvgBackArrow } from "../components/Svg";
import CheckoutCard from "../components/CheckoutCard";

const Checkout = ({ navigation }) => {
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
            Mon panier
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 25,
              paddingVertical: 15,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
                backgroundColor: "rgba(0,136,151,0.6)",
                borderRadius: 5,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "EuclidCircularB-Regular",
                  color: "#fff",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "EuclidCircularB-Medium",
                  color: "#fff",
                }}
              >
                1 000 000 F CFA
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentDetails")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 10,
                backgroundColor: "#FCC014",
                borderRadius: 5,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                }}
              >
                Commander
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 80 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

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
    backgroundColor: "#F5F5F6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
  },
});
