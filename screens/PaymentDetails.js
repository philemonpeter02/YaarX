import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusGreenSvg, RecordSvg, SvgBackArrow } from "../components/Svg";
import { RadioButton } from "react-native-paper";

const PaymentDetails = ({ navigation }) => {
  const [checked, setChecked] = useState(1);

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
            Détails de la commande
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}
              >
                N° de la commande
              </Text>
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}
              >
                XXXXXXXX
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
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}
              >
                Nombre de produits
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
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}
              >
                Code promo
              </Text>
              <TextInput
                style={{
                  fontSize: 12,
                  fontFamily: "EuclidCircularB-Bold",
                  backgroundColor: "rgba(0, 136, 151, 0.05)",
                  width: 142,
                  height: 28,
                  borderRadius: 5,
                  paddingLeft: 15,
                }}
              />
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
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Regular" }}
              >
                Total
              </Text>
              <Text
                style={{ fontSize: 12, fontFamily: "EuclidCircularB-Bold" }}
              >
                14 000 000 F CFA
              </Text>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Adresse de livraison
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                  color: "#FCC014",
                }}
              >
                Ajouter
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginVertical: 10,
              }}
            >
              <RadioButton
                value="first"
                color="rgba(0, 136, 151, 1)"
                status={checked === 1 ? "checked" : "unchecked"}
                onPress={() => setChecked(1)}
              />
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Ma boutique
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Rue 23,109339083
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                  color: "#000",
                }}
              >
                Option de livraison
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="first"
                  color="rgba(0, 136, 151, 1)"
                  status={checked === 1 ? "checked" : "unchecked"}
                  onPress={() => setChecked(1)}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Livraison standard
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="first"
                  color="rgba(0, 136, 151, 1)"
                  status={checked === 1 ? "checked" : "unchecked"}
                  onPress={() => setChecked(1)}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Livraison express
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                  color: "#000",
                }}
              >
                Mode de paiement
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="first"
                  color="rgba(0, 136, 151, 1)"
                  status={checked === 1 ? "checked" : "unchecked"}
                  onPress={() => setChecked(1)}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Mobile Money (Orange Money, Moov Money)
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  value="first"
                  color="rgba(0, 136, 151, 1)"
                  status={checked === 1 ? "checked" : "unchecked"}
                  onPress={() => setChecked(1)}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "EuclidCircularB-Regular",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Paiement à la livraison
                </Text>
              </View>
            </View>
          </View>

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
                marginLeft: 10,
                backgroundColor: "#FCC014",
                borderRadius: 5,
                paddingVertical: 10,
                height: 44,
              }}
              onPress={() => navigation.navigate("PaymentSuccess")}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "EuclidCircularB-Medium",
                }}
              >
                Valider votre commande
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 80 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35B8C8",
  },
  topContainer: {
    height: "10%",
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
  box: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
});
