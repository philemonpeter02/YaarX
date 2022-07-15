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
import Icon from "react-native-vector-icons/Entypo";
import CamIcon from "react-native-vector-icons/Feather";
import { Avatar, Badge } from "react-native-paper";

const EditProfile = ({ navigation }) => {
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
            fontFamily: "EuclidCircularB-Bold",
          }}
        >
          Modifier votre compte
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <View style={{ height: 80, width: 80 }}>
            <Avatar.Image
              size={87}
              source={require("../assets/images/avatar.jpg")}
              style={{ position: "absolute", top: 25 }}
            />
            <Badge
              style={{
                position: "absolute",
                top: 80,
                left: 70,
                backgroundColor: "white",
              }}
            >
              <CamIcon
                name="camera"
                size={10}
                color="#008897"
                style={{ marginTop: 1.5 }}
              />
            </Badge>
          </View>
        </View>
        <View
          style={{ width: "100%", paddingVertical: 25, paddingHorizontal: 25 }}
        >
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
          <Text style={styles.text}>Nom de votre boutique (optionnel)</Text>
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
              placeholder="Boutique"
              placeholderText="rgba(0, 0, 0, 0.6)"
            />
          </View>

          <Text style={styles.text}>Type de votre boutique</Text>
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
              placeholder="Commerce général"
              placeholderText="rgba(0, 0, 0, 0.6)"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CategorySelection")}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "EuclidCircularB-Regular",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              Enregistrer les informations
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: "transparent",
                marginTop: 5,
                flexDirection: "row",
              },
            ]}
            onPress={() => navigation.navigate("CategorySelection")}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "EuclidCircularB-Regular",
                color: "#008897",
              }}
            >
              Se déconnecter
            </Text>
            <Icon
              name="chevron-small-right"
              size={20}
              color="#008897"
              style={{ marginTop: 1.5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

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
    backgroundColor: "#F5F5F6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "hidden",
    alignItems: "flex-start",
  },
  button: {
    backgroundColor: "#FCC014",
    width: "100%",
    height: 45,
    borderRadius: 5,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    backgroundColor: "rgba(0, 136, 151, 0.05)",
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
