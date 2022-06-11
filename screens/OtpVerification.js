import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgBackArrow } from "../components/Svg";
import OtpInputs from "react-native-otp-inputs";

const OtpVerification = ({ navigation }) => {
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
          Vérification
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            width: "70%",
            fontFamily: "EuclidCircularB-Regular",
          }}
        >
          Un message de confirmation vous a été envoyé sur le numéro :{" "}
          <Text style={{ fontFamily: "EuclidCircularB-Bold" }}>
            (+226) 70 00 00 15{" "}
          </Text>
        </Text>
        <View style={{ height: 100 }}>
          <OtpInputs
            inputStyles={{
              fontFamily: "EuclidCircularB-Regular",
              backgroundColor: "#F2F9FA",
              textAlign: "center",
              marginRight: 5,
              marginLeft: 5,
              height: 50,
              width: 40,
              borderRadius: 5,
            }}
            inputContainerStyles={{}}
            handleChange={(code) => console.log(code)}
            numberOfInputs={4}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Info")}>
          <Text
            style={{
              color: "#FCC014",
              textDecorationLine: "underline",
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Vous n’avez pas reçu de mode ?
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;

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
    height: "90%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 80,
    alignItems: "center",
  },
});
