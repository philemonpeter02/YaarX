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

const HomeScreen = ({ navigation }) => {
  const [filter, setFilter] = useState("Les plus demandés");
  const [filterOpen, setFilterOpen] = useState(false);
  const numColumns = 2;

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
              backgroundColor: "#fff",
              width: "100%",
              height: 105,
              marginBottom: 15,
            }}
          />
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              flexDirection: "column",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              justifyContent: "center",
              paddingHorizontal: 25,
              marginBottom: 15,
            }}
          >
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
                    fontFamily: "EuclidCircularB-Bold",
                    fontSize: 16,
                    color: "#000",
                  },
                ]}
              >
                Nos catégories
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingVertical: 15,
              }}
            >
              <CircleComponent title="Catégories" svg={true} />
              <CircleComponent title="Boissons" />
              <CircleComponent title="Café & Thé" />
              <CircleComponent title="Cuisine" />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              flexDirection: "column",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              justifyContent: "center",
              paddingHorizontal: 25,
            }}
          >
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
                    fontFamily: "EuclidCircularB-Bold",
                    fontSize: 16,
                    color: "#000",
                  },
                ]}
              >
                Nos produits
              </Text>

              <Menu>
                <MenuTrigger
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    style={[
                      styles.text,
                      {
                        color: "#000",
                        fontSize: 10,
                        textTransform: "uppercase",
                      },
                    ]}
                  >
                    Trier par:{" "}
                    <Text
                      style={{
                        color: "#35B8C8",
                        textTransform: "uppercase",
                        fontSize: 11,
                      }}
                    >
                      {filter}
                    </Text>
                  </Text>
                  <Icon name="chevron-small-down" color="#35B8C8" size={12} />
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption
                    onSelect={() => {
                      setFilter("Les plus demandés ");
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            filter === "Les plus demandés" ? "#35B8C8" : "#000",
                          fontSize: 10,
                        },
                      ]}
                    >
                      Les plus demandés
                    </Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setFilter("Nouvel arrivage");
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            filter === "Nouvel arrivage" ? "#35B8C8" : "#000",
                          fontSize: 10,
                        },
                      ]}
                    >
                      Nouvel arrivage
                    </Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setFilter("Prix décroissants");
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            filter === "Prix décroissants" ? "#35B8C8" : "#000",
                          fontSize: 10,
                        },
                      ]}
                    >
                      Prix décroissants
                    </Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => {
                      setFilter("Prix croissants");
                    }}
                  >
                    <Text
                      style={[
                        styles.text,
                        {
                          color:
                            filter === "Prix croissants" ? "#35B8C8" : "#000",
                          fontSize: 10,
                        },
                      ]}
                    >
                      Prix croissants
                    </Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                paddingVertical: 15,
              }}
            >
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                data={dataSource}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <ProductCardSqaure
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                  />
                )}
                //Setting the number of column
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns}
              />
            </View>
            <View style={{ width: "100%", height: 80 }} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 2,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 3,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 4,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 5,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 6,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 7,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
  {
    id: 8,
    title: "Jus de mangue",
    subtitle: "Dafani",
    price: "900 F CFA",
  },
];
