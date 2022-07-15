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
import {
  BellSvg,
  NoterSvg,
  PlusGreenSvg,
  ProfileListSvg1,
  ProfileListSvg2,
  ProfileListSvg3,
  ProfileListSvg4,
  RecordSvg,
  SupportSvg,
  SvgBackArrow,
  YaarXSmall,
} from "../components/Svg";
import Icon from "react-native-vector-icons/Entypo";

const SupportScreen = ({ navigation }) => {
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
          Support
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 25,
              borderRadius: 5,
            }}
          >
            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.6)",
                  },
                ]}
              >
                Conditions d’utilisation
              </Text>
              <Icon
                name="chevron-small-right"
                size={20}
                color="rgba(0, 0, 0, 0.6)"
                style={{ marginTop: 1.5 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 25,
              borderRadius: 5,
            }}
          >
            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.6)",
                  },
                ]}
              >
                Politique de confidentialité
              </Text>
              <Icon
                name="chevron-small-right"
                size={20}
                color="rgba(0, 0, 0, 0.6)"
                style={{ marginTop: 1.5 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              paddingVertical: 15,
              paddingHorizontal: 25,
              borderRadius: 5,
            }}
          >
            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.6)",
                  },
                ]}
              >
                Politique de retour et de remboursement
              </Text>
              <Icon
                name="chevron-small-right"
                size={20}
                color="rgba(0, 0, 0, 0.6)"
                style={{ marginTop: 1.5 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingVertical: 15,
              paddingHorizontal: 25,
              borderRadius: 5,
            }}
          >
            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.6)",
                  },
                ]}
              >
                Nous contacter
              </Text>
              <Icon
                name="chevron-small-right"
                size={20}
                color="rgba(0, 0, 0, 0.6)"
                style={{ marginTop: 1.5 }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingVertical: 30,
            marginTop: "auto",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <YaarXSmall />
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.6)",
              marginTop: 5,
            }}
          >
            Version 1.0
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SupportScreen;

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
    backgroundColor: "#F5F5F6",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  text: {
    fontSize: 14,
    color: "#000",
    fontFamily: "EuclidCircularB-Bold",
  },
  listBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "rgba(0, 136, 151, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
});
