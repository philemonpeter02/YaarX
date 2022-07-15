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
  BiscuitSvg,
  BiscuitSvgActive,
  BoissonSvg,
  BoissonSvgActive,
  CafeSvg,
  CafeSvgActive,
  CartSvg,
  CuisineSvg,
  CuisineSvgActive,
  EditPenSvg,
  FireSvg,
  FireSvgActive,
  HeartSvg,
  HygeineSvg,
  HygeineSvgActive,
  MagnifySvg,
  RizSvg,
  RizSvgActive,
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

const CategoriesScreen = ({ navigation }) => {
  const [filter, setFilter] = useState("les plus populaires");
  const [filterOpen, setFilterOpen] = useState(false);
  const [categoryActive, setCategoryActive] = useState(0);
  const [category, setCategory] = useState("Les plus demandés");
  const numColumns = 3;

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
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: 80,
            height: "100%",
            flexDirection: "column",
          }}
        >
          {dataSource.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setCategoryActive(index);
                setCategory(item.title);
              }}
              style={{
                backgroundColor: categoryActive === index ? "#F5F5F6" : "white",
                paddingHorizontal: 5,
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 5,
                borderLeftWidth: categoryActive === index ? 5 : 0,
                borderColor:
                  categoryActive === index ? "rgba(252, 192, 20, 1)" : null,
                flex: 1,
              }}
            >
              {categoryActive === index ? item.iconActive : item.icon}
              <Text
                style={{
                  fontSize: categoryActive === index ? 12 : 10,
                  fontFamily: "EuclidCircularB-Regular",
                  marginTop: 5,
                  color:
                    categoryActive === index
                      ? "rgba(252, 192, 20, 1)"
                      : "rgba(121, 129, 132, 1)",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#F5F5F6",
            flexDirection: "column",
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "EuclidCircularB-Regular",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </Text>
              <View
                style={{
                  width: 135,
                  height: 1,
                  marginLeft: 10,
                  backgroundColor: "rgba(121, 129, 132, 1)",
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                marginTop: 5,
                marginBottom: 25,
                color: "#798184",
                fontFamily: "EuclidCircularB-Regular",
              }}
            >
              Tous les produits da la catégorie 1
            </Text>
            {products.map((item, index) => (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: 75,
                    marginBottom: 15,
                    // width: "75%",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "EuclidCircularB-Bold",
                      lineHeight: 16,
                    }}
                  >
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CategoriesDetails")}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Text
                      style={{
                        fontFamily: "EuclidCircularB-Regular",
                        fontSize: 12,
                        color: "#008897",
                        textDecorationLine: "underline",
                      }}
                    >
                      Tout voir
                    </Text>
                    <Icon
                      name="chevron-small-right"
                      size={16}
                      color="#008897"
                    />
                  </TouchableOpacity>
                </View>
                <FlatList
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  data={item.productArray}
                  contentContainerStyle={{ paddingRight: 75 }}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <ProductCategoriesCard
                      title={item.product_name}
                      img={item.img}
                    />
                  )}
                  //Setting the number of column
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={numColumns}
                />
              </>
            ))}

            <View style={{ width: "100%", height: 80 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

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
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#F5F5F6",
    borderTopRightRadius: 10,
    flexDirection: "row",
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
    title: "Les plus demandés",
    icon: <FireSvg />,
    iconActive: <FireSvgActive />,
  },
  {
    id: 2,
    title: "Hygiène & Beauté",
    icon: <HygeineSvg />,
    iconActive: <HygeineSvgActive />,
  },
  {
    id: 3,
    title: "Boisson",
    icon: <BoissonSvg />,
    iconActive: <BoissonSvgActive />,
  },
  {
    id: 4,
    title: "Cuisine",
    icon: <CuisineSvg />,
    iconActive: <CuisineSvgActive />,
  },
  {
    id: 5,
    title: "Café & thé",
    icon: <CafeSvg />,
    iconActive: <CafeSvgActive />,
  },
  {
    id: 6,
    title: "Riz, pâtes & Graines",
    icon: <RizSvg />,
    iconActive: <RizSvgActive />,
  },
  {
    id: 7,
    title: "Biscuits & bonbons",
    icon: <BiscuitSvg />,
    iconActive: <BiscuitSvgActive />,
  },
];

const products = [
  {
    id: 1,
    title: "Sucreries",
    productArray: [
      {
        id: 1,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
      {
        id: 2,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
      {
        id: 3,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
      {
        id: 4,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
      {
        id: 5,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
      {
        id: 6,
        product_name: "Fanta Canette",
        img: require("../assets/images/fanta.png"),
      },
    ],
  },
  {
    id: 2,
    title: "Jus naturels",
    productArray: [
      {
        id: 1,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
      {
        id: 2,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
      {
        id: 3,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
      {
        id: 4,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
      {
        id: 5,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
      {
        id: 6,
        product_name: "Dafani Bouteille",
        img: require("../assets/images/productsq.png"),
      },
    ],
  },
];
