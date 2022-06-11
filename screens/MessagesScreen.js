import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlusGreenSvg, RecordSvg, SvgBackArrow } from "../components/Svg";

const MessagesScreen = ({ navigation }) => {
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
          Messages
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          />
          <Text style={styles.text}>AUJOURD’HUI</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          />
        </View>
        <View style={{ width: "100%", flex: 1, justifyContent: "flex-end" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.searchBox}>
              <TextInput placeholder="Message" style={styles.input} />
              <TouchableOpacity style={styles.iconButton}>
                <PlusGreenSvg />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.iconButton}>
              <RecordSvg />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;

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
    // flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    // justifyContent: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 25,
    // alignItems: "flex-start",
  },
  button: {
    backgroundColor: "rgba(252, 192,20,0.2)",
    width: "100%",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 75,
  },
  input: {
    height: 45,
    backgroundColor: "#F2F9FA",
    flex: 1,
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: "EuclidCircularB-Regular",
  },
  text: {
    fontSize: 14,
    color: "rgba(0,0,0,0.2)",
    paddingVertical: 10,
    fontFamily: "EuclidCircularB-Regular",
    marginHorizontal: 10,
  },
  searchBox: {
    backgroundColor: "#F2F9FA",
    flex: 1,
    flexDirection: "row",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});

const dataSource = [
  {
    id: 1,
    title: "Commerce Général",
  },
  {
    id: 2,
    title: "Supermarché",
  },
  {
    id: 3,
    title: "Pharmacie",
  },
  {
    id: 4,
    title: "Restaurant",
  },
  {
    id: 5,
    title: "Bureautique",
  },
  {
    id: 6,
    title: "Quincaillerie",
  },
  {
    id: 7,
    title: "Habillement",
  },
  {
    id: 8,
    title: "Meubles",
  },
  {
    id: 9,
    title: "Autres",
  },
];
