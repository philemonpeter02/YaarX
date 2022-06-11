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
  PlusGreenSvg,
  ProfileListSvg1,
  ProfileListSvg2,
  ProfileListSvg3,
  ProfileListSvg4,
  RecordSvg,
  SvgBackArrow,
} from "../components/Svg";

const ProfileScreen = ({ navigation }) => {
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
          Mon compte
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            marginBottom: 15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#F5F5F6",
              height: 90,
              width: 90,
              borderRadius: 90,
              marginTop: -15,
            }}
          />
          <View style={{ marginVertical: 15, alignItems: "center" }}>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "EuclidCircularB-Regular",
                  fontWeight: "bold",
                  fontSize: 16,
                },
              ]}
            >
              Ouédraogo Charles
            </Text>
            <Text
              style={[
                styles.text,
                { fontFamily: "EuclidCircularB-Regular", fontSize: 12 },
              ]}
            >
              Gérant de Owcad
            </Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.text}>Modifier mon profil</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 25,
            paddingVertical: 15,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#F5F5F6",
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            <View style={styles.iconContainer}>
              <ProfileListSvg1 />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    fontWeight: "bold",
                  },
                ]}
              >
                Offre spéciale
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontFamily: "EuclidCircularB-Regular", fontSize: 12 },
                ]}
              >
                Voir vos offres spéciales
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#F5F5F6",
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            <View style={styles.iconContainer}>
              <ProfileListSvg2 />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    fontWeight: "bold",
                  },
                ]}
              >
                Mes commandes <Text style={{ color: "grey" }}>(07)</Text>
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontFamily: "EuclidCircularB-Regular", fontSize: 12 },
                ]}
              >
                Voir vos offres spéciales
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#F5F5F6",
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            <View style={styles.iconContainer}>
              <ProfileListSvg3 />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    fontWeight: "bold",
                  },
                ]}
              >
                Mes favoris <Text style={{ color: "grey" }}>(10)</Text>
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontFamily: "EuclidCircularB-Regular", fontSize: 12 },
                ]}
              >
                Voir vos offres spéciales
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#F5F5F6",
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}
          >
            <View style={styles.iconContainer}>
              <ProfileListSvg4 />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                    fontWeight: "bold",
                  },
                ]}
              >
                Informations personnelles{" "}
              </Text>
              <Text
                style={[
                  styles.text,
                  { fontFamily: "EuclidCircularB-Regular", fontSize: 12 },
                ]}
              >
                Voir vos offres spéciales
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
    flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
  },
  editButton: {
    backgroundColor: "#FCC014",
    height: 36,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },

  text: {
    fontSize: 14,
    color: "#000",
    fontFamily: "EuclidCircularB-Bold",
  },
  listBox: {
    flexDirection: "column",
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
