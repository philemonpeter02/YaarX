import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CartBlackSvg,
  HeartWhiteSvg,
  MinusBlackSvg,
  PlusBlackSvg,
  PlusGreenSvg,
  RecordSvg,
  SvgBackArrow,
} from "../components/Svg";

const images = [
  {
    id: 1,
    img: require("../assets/images/choco.png"),
  },
  {
    id: 2,
    img: require("../assets/images/choco.png"),
  },
  {
    id: 3,
    img: require("../assets/images/choco.png"),
  },
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ProductDetailScreen = ({ navigation }) => {
  const [imgActive, setImgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
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
          Détails du produit
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.slide}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.slide}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {images.map((e, i) => (
              <View
                style={[
                  styles.slide,
                  { justifyContent: "center", alignItems: "center" },
                ]}
              >
                <Image
                  key={e}
                  resizeMode="contain"
                  source={e.img}
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, i) => (
              <View
                key={e}
                style={imgActive === i ? styles.dotActive : styles.dot}
              />
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            backgroundColor: "#F5F5F6",
            marginVertical: 25,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: "#fff",
                borderColor: "#F5F5F6",
                borderWidth: 1,
              },
            ]}
          >
            <MinusBlackSvg />
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 16,
              fontFamily: "EuclidCircularB-Regular",
              fontWeight: "bold",
            }}
          >
            2
          </Text>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#FCC014" }]}
          >
            <PlusBlackSvg />
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontFamily: "EuclidCircularB-Bold" }}>
              Bonbon Maoam
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "EuclidCircularB-Regular",
                color: "rgba(0, 0, 0, 0.6)",
                marginVertical: 2.5,
              }}
            >
              100g x 24 (carton)
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontFamily: "EuclidCircularB-Bold" }}>
            12 000 F CFA
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginVertical: 15,
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "EuclidCircularB-Bold",
              marginBottom: 5,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 14, fontFamily: "EuclidCircularB-Regular" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "EuclidCircularB-Bold",
              marginBottom: 5,
              flex: 1,
            }}
          >
            24 000 F CFA
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "space-evenly",
              height: 45,
              backgroundColor: "rgba(0, 136, 151, 0.64)",
              borderRadius: 5,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <HeartWhiteSvg />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "EuclidCircularB-Regular",
                marginBottom: 5,
                color: "white",
              }}
            >
              Ajouter au favoris
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 45,
              backgroundColor: "#FCC014",
              borderRadius: 5,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <CartBlackSvg />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontFamily: "EuclidCircularB-Medium",
                marginBottom: 5,
              }}
            >
              Ajouter au panier
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35B8C8",
  },
  topContainer: {
    height: "10%",
    width: WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
  },
  bottomContainer: {
    flex: 1,
    width: WIDTH,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
  },
  slide: {
    width: WIDTH,
    height: 200,
    // paddingBottom: 50,
  },
  wrapDot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotActive: {
    margin: 3,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#FCC014",
  },
  dot: {
    margin: 3,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,136,151,0.2)",
  },
  btn: {
    height: 30,
    width: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
