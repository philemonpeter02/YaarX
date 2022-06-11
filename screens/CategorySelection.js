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
import { SvgBackArrow } from "../components/Svg";

const CategorySelection = ({ navigation }) => {
  const numColumns = 3;
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemBox}>
        <Text
          style={{
            fontFamily: "EuclidCircularB-Regular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
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
        <Text style={styles.text}>Nom de votre boutique (optionnel)</Text>
        <TextInput placeholder="Ex : Kaboré" style={styles.input} />

        <Text style={styles.text}>Type de votre boutique</Text>
        <FlatList
          data={dataSource}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          //Setting the number of column
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tabs")}
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

export default CategorySelection;

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
    paddingVertical: 25,
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
    width: "100%",
    borderRadius: 5,
    paddingLeft: 15,
    fontFamily: "EuclidCircularB-Regular",
  },
  text: {
    fontSize: 14,
    width: "100%",
    color: "rgba(0,0,0,0.6)",
    paddingVertical: 10,
    fontFamily: "EuclidCircularB-Regular",
    marginTop: 15,
  },
  itemBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    height: 80,
    // width: 100,
    backgroundColor: "#F2F9FA",
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
