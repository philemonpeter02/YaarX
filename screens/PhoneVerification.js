import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgLogo } from "../components/Svg";
import axios from "../axios/index";
import Toast from "react-native-root-toast";
const PhoneVerification = ({ navigation }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const phoneHandler = async () => {
    navigation.navigate("Otp");

    // if (text === "") return Toast.show("Empty !");
    // try {
    //   setLoading(true);
    //   const { data } = await axios.post("/auth/verify-phone", {
    //     phone: text,
    //   });
    //   if (data) {
    //     console.log(data);
    //     setLoading(false);
    //   }
    // } catch (e) {
    //   setLoading(false);
    //   console.debug(e);
    // }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <SvgLogo />
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ width: "60%" }}>
          <Text
            style={{
              fontSize: 24,
              color: "rgba(0,0,0,0.8)",
              marginBottom: 50,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            S’inscrire
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "rgba(0,0,0,0.6)",
              marginBottom: 15,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            Votre numéro de téléphone
          </Text>
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  width: 60,
                  height: 45,
                  backgroundColor: "rgba(0, 136, 151, 0.07)",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/images/flag.png")}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: 45,
                  backgroundColor: "rgba(0, 136, 151, 0.07)",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  value={text}
                  onChange={setText}
                  placeholder="70 00 00 15"
                  style={{
                    width: 150,
                    paddingLeft: 15,
                    fontFamily: "EuclidCircularB-Regular",
                  }}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={phoneHandler}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "EuclidCircularB-Regular",
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              Suivant
            </Text>
            {loading && (
              <ActivityIndicator
                size="small"
                color="#35B8C8"
                style={{ marginRight: -30, marginLeft: 15 }}
              />
            )}
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 10,
              textAlign: "center",
              marginTop: 15,
              fontFamily: "EuclidCircularB-Regular",
            }}
          >
            En continuant, vous acceptez nos
            <Text
              style={{
                color: "#FCC014",
                textDecorationLine: "underline",
              }}
            >
              {" "}
              termes et conditions{" "}
            </Text>
            et notre{" "}
            <Text
              style={{
                color: "#FCC014",
                textDecorationLine: "underline",
              }}
            >
              politique de confidentialité
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35B8C8",
  },
  topContainer: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(252, 192,20,0.2)",
    width: "100%",
    height: 45,
    flexDirection: "row",
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
