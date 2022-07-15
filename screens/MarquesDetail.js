import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CartSvg,
  EditPenSvg,
  HeartSvg,
  MagnifySvg,
  SvgBackArrow,
} from "../components/Svg";
import CircleComponent from "../components/CircleComponent";
import ProductCardSqaure from "../components/ProductCardSqaure";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import Icon from "react-native-vector-icons/Entypo";
import ProductCategoriesCard from "../components/ProductCategoriesCard";

const MarquesDetail = ({ navigation }) => {
  const [filter, setFilter] = useState("Les plus demandés");
  const [filterOpen, setFilterOpen] = useState(false);
  const numColumns = 4;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Quel produit cherchez-vous ?"
            style={styles.input}
          />
          <MagnifySvg />
        </View>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("Checkout")}
        >
          <CartSvg />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <HeartSvg />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.iconButton}>
          <EditPenSvg />
        </TouchableOpacity> */}
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView
          style={{
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          contentContainerStyle={{
            flexGrow: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              flexDirection: "column",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              justifyContent: "center",
              paddingHorizontal: 25,
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../assets/images/marques5.png")}
                resizeMode="contain"
                style={{ width: 80 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 14,
                    color: "#798184",
                  },
                ]}
              >
                Liste des produits de Nestlé
              </Text>
            </View>
            {dataSource.map((item, index) => (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        fontFamily: "EuclidCircularB-Regular",
                        fontSize: 12,
                        color: "#008897",
                        textTransform: "uppercase",
                      },
                    ]}
                  >
                    {item.title}
                  </Text>

                  <View
                    style={{
                      height: 1,

                      flex: 1,
                      marginLeft: 10,
                      backgroundColor: "#008897",
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <FlatList
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    data={item.productArray}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <ProductCategoriesCard
                        title={item.product_name}
                        img={item.img}
                        backgroundColor="#fff"
                      />
                    )}
                    //Setting the number of column
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                  />
                </View>
              </>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MarquesDetail;

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
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#F5F5F6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    // justifyContent: "flex-start",
    alignItems: "center",
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
  searchBox: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 12,
    fontFamily: "EuclidCircularB-Regular",
  },
  text: {
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
    paddingVertical: 10,
    fontFamily: "EuclidCircularB-Regular",
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
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});

const dataSource = [
  {
    id: 1,
    title: "Produits laitiers",
    productArray: [
      {
        id: 1,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 2,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 3,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 4,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 5,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 6,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 7,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
      {
        id: 8,
        product_name: "Nido Fortifié",
        img: require("../assets/images/nedo.png"),
      },
    ],
  },
  {
    id: 2,
    title: "Cafés",
    productArray: [
      {
        id: 1,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 2,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 3,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 4,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 5,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 6,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 7,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
      {
        id: 8,
        product_name: "Nescafé Classic",
        img: require("../assets/images/nescafe.png"),
      },
    ],
  },
];
