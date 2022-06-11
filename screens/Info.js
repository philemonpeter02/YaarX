import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgBackArrow } from "../components/Svg";

const Info = ({ navigation }) => {
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
          Complétez vos informations
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Votre nom</Text>
        <TextInput placeholder="Ex : Kaboré" style={styles.input} />
        <Text style={styles.text}>Votre prénom</Text>
        <TextInput placeholder="Ex : Jules" style={styles.input} />
        <Text style={styles.text}>Créer un mot de passe</Text>
        <TextInput placeholder="Votre mot de passe" style={styles.input} />
        <Text style={styles.text}>Confirmer votre mot de passe </Text>
        <TextInput
          placeholder="Veuillez entrer votre nom ici"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CategorySelection")}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Suivant
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Info;

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
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "rgba(252, 192,20,0.2)",
    width: "100%",
    height: 45,
    borderRadius: 5,
    marginTop: 75,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    backgroundColor: "#F2F9FA",
    width: "100%",
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: "EuclidCircularB-Regular",
  },
  text: {
    fontSize: 14,
    width: "70%",
    color: "rgba(0,0,0,0.6)",
    paddingVertical: 10,
    fontFamily: "EuclidCircularB-Medium",
    marginTop: 15,
    fontWeight: "500",
  },
});
