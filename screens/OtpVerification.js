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
              marginRight: 15,
              marginLeft: 15,
              height: 50,
              width: 40,
              borderRadius: 5,
            }}
            inputContainerStyles={{}}
            handleChange={(code) => console.log(code)}
            numberOfInputs={4}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            marginVertical: 2.5,
          }}
        >
          <Text
            style={{
              color: "background: rgba(140, 140, 140, 1)",
              fontSize: 14,
              textDecorationLine: "underline",
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Vous n’avez pas reçu de code ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            marginVertical: 2.5,
          }}
        >
          <Text
            style={{
              color: "#FCC014",
              textDecorationLine: "underline",
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Renvoyer-moi le code !
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Info")}
          style={{
            alignSelf: "flex-end",
            marginRight: 10,
            marginVertical: 2.5,
          }}
        >
          <Text
            style={{
              color: "#FCC014",
              textDecorationLine: "underline",
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Je souhaite changer de numéro.
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
    paddingHorizontal: 35,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 80,
    alignItems: "center",
  },
});
