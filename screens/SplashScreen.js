import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SvgLogo } from "../components/Svg";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const SplashScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / WIDTH);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (currentSlideIndex === 2) {
      navigation.replace("Phone");
      return;
    }
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * WIDTH;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * WIDTH;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  return (
    <View style={styles.container}>
      <SvgLogo />
      <View style={{ height: 150 }}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          contentContainerStyle={{
            alignItems: "center",
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
      </View>
      <Footer
        currentSlideIndex={currentSlideIndex}
        skip={skip}
        goToNextSlide={goToNextSlide}
        navigation={navigation}
      />
    </View>
  );
};

export default SplashScreen;

const Slide = ({ item }) => {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", width: WIDTH }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.text}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const Footer = ({ currentSlideIndex, skip, goToNextSlide }) => {
  return (
    <View
      style={{
        height: HEIGHT * 0.25,
        justifyContent: "space-between",
        paddingHorizontal: 20,
      }}
    >
      {/* Indicator container */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {/* Render indicator */}
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: "rgba(252, 192, 20, 1)",
              },
            ]}
          />
        ))}
      </View>

      {/* Render buttons */}
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "column",
            height: 125,
            width: 226,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            style={styles.btn}
          >
            <Text
              style={{
                fontFamily: "EuclidCircularB-Regular",
                fontSize: 14,
              }}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
          <View style={{ width: 15 }} />

          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.btn,
              {
                borderColor: "white",
                borderWidth: 1,
                backgroundColor: "transparent",
              },
            ]}
            onPress={skip}
          >
            <Text
              style={{
                fontFamily: "EuclidCircularB-Regular",
                fontSize: 14,
                color: "white",
              }}
            >
              S’inscrire
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#35B8C8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 300,
  },
  text: {
    fontFamily: "EuclidCircularB-Regular",
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center",
  },
  titleText: {
    fontFamily: "EuclidCircularB-Bold",
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: "center",
    marginVertical: 10,
  },
  indicator: {
    height: 12,
    width: 12,
    backgroundColor: "white",
    marginHorizontal: 3,
    borderRadius: 10,
  },
  btn: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "rgba(252, 192, 20, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
});

const slides = [
  {
    id: 1,
    title: "Bienvenu sur YaarX",
    subtitle:
      "Désormais, faites vos achats en gros à des prix défiants toute concurrence !",
  },
  {
    id: 2,
    title: "Livraison gratuite !",
    subtitle:
      "Toutes vos commandes sur YaarX sont livrées chez vous gratuitement en 24 heures.",
  },
  {
    id: 3,
    title: "Payez plus tard !",
    subtitle:
      "Sur YaarX, vous disposez d’une flexibilité de paiement allant jusqu’à 60 jours.",
  },
];
