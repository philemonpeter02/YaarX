import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgBackArrow } from "../components/Svg";
import Icon from "react-native-vector-icons/Feather";
const Info = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const [visibleConfirm, setVisibleConfirm] = useState(true);
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
        <TextInput
          placeholder="Ex : Kaboré"
          style={styles.input}
          placeholderText="rgba(0, 0, 0, 0.6)"
        />
        <Text style={styles.text}>Votre prénom</Text>
        <TextInput
          placeholder="Ex : Jules"
          style={styles.input}
          placeholderText="rgba(0, 0, 0, 0.6)"
        />
        <Text style={styles.text}>Créer un mot de passe</Text>
        <View
          style={[
            styles.input,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <TextInput
            placeholder="Votre mot de passe"
            placeholderText="rgba(0, 0, 0, 0.6)"
            secureTextEntry={visible}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Icon
              name={visible ? "eye-off" : "eye"}
              size={20}
              color="rgba(0, 0, 0, 0.6)"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Confirmer votre mot de passe </Text>
        <View
          style={[
            styles.input,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            },
          ]}
        >
          <TextInput
            placeholder="Veuillez entrer votre nom ici"
            placeholderText="rgba(0, 0, 0, 0.6)"
            secureTextEntry={visibleConfirm}
          />
          <TouchableOpacity onPress={() => setVisibleConfirm(!visibleConfirm)}>
            <Icon
              name={visibleConfirm ? "eye-off" : "eye"}
              size={20}
              color="rgba(0, 0, 0, 0.6)"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CategorySelection")}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.5)",
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
    paddingHorizontal: 15,
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
