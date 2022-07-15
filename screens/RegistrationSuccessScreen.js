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
import {
  PaymentSuccessSvg,
  PlusGreenSvg,
  RecordSvg,
  SvgBackArrow,
} from "../components/Svg";
import { RadioButton } from "react-native-paper";

const RegistrationSuccessScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
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
        <PaymentSuccessSvg />

        <Text
          style={{
            marginTop: 25,
            fontSize: 14,
            fontFamily: "EuclidCircularB-Regular",
            width: "70%",
            textAlign: "center",
          }}
        >
          Votre inscription a été enregistrée avec succès. Un agent vous
          contactera d’ici peu.
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 25,
            paddingVertical: 35,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Tabs")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 10,
              backgroundColor: "#FCC014",
              borderRadius: 5,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "EuclidCircularB-Medium",
              }}
            >
              Bienvenu sur la plateforme Yaarx
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationSuccessScreen;

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
    alignItems: "center",
    justifyContent: "center",
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
