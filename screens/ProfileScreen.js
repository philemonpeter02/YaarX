import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
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
import StarIcon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";

const ProfileScreen = ({ navigation }) => {
  const [ratingVisible, setRatingVisible] = useState(false);
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
          Mon compte
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#fff",
            marginBottom: 15,
            padding: 15,
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
            }}
          />
          <View
            style={{
              marginVertical: 15,
              marginLeft: 25,
              flexDirection: "column",
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "EuclidCircularB-Regular",
                  fontSize: 16,
                },
              ]}
            >
              Ouédraogo Charles
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <Text
                style={[
                  styles.text,
                  { color: "#FCC014", fontFamily: "EuclidCircularB-Regular" },
                ]}
              >
                Se déconnecter
              </Text>
              <Icon
                name="chevron-small-right"
                size={14}
                color="#FCC014"
                style={{ marginTop: 1.5 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              padding: 10,
              paddingHorizontal: 25,
              borderRadius: 5,
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
                  },
                ]}
              >
                Informations personnelles
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
            style={{
              flexDirection: "row",
              paddingHorizontal: 25,

              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <View style={styles.iconContainer}>
              <BellSvg />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                  },
                ]}
              >
                Mes notifications <Text style={{ color: "grey" }}>(07)</Text>
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Favourites")}
            style={{
              flexDirection: "row",
              paddingHorizontal: 25,

              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              padding: 10,
              borderRadius: 5,
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
                  },
                ]}
              >
                Mes favoris <Text style={{ color: "grey" }}>(10)</Text>
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              padding: 10,
              paddingHorizontal: 25,

              borderRadius: 5,
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
                  },
                ]}
              >
                Mes commandes <Text style={{ color: "grey" }}>(07)</Text>
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Support")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderColor: "#F5F5F6",
              borderBottomWidth: 1,
              padding: 10,
              paddingHorizontal: 25,

              borderRadius: 5,
            }}
          >
            <View style={styles.iconContainer}>
              <SupportSvg />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                  },
                ]}
              >
                Support
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setRatingVisible(!ratingVisible)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: 10,
              paddingHorizontal: 25,

              borderRadius: 5,
            }}
          >
            <View style={styles.iconContainer}>
              <NoterSvg />
            </View>

            <View style={styles.listBox}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: "EuclidCircularB-Regular",
                    fontSize: 16,
                  },
                ]}
              >
                Noter l’application
              </Text>
            </View>
          </TouchableOpacity>
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
      <Modal
        isVisible={ratingVisible}
        animationOutTiming={600}
        onBackdropPress={() => {
          setRatingVisible(!ratingVisible);
        }}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 25,
            paddingHorizontal: 15,
            justifyContent: "center",
            alignItems: "center",
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              // paddingHorizontal: 25,
              marginBottom: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => setRatingVisible(!ratingVisible)}
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="cross" size={20} color="rgba(0, 0, 0, 0.6)" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "EuclidCircularB-Regular",
              color: "black",
            }}
          >
            Donnez-nous 5 étoiles sur Playstore !
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "EuclidCircularB-Regular",
              color: "rgba(0, 0, 0, 0.6)",
            }}
          >
            Votre feedback nous aide à améliorer votre expérience
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              marginVertical: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <StarIcon
                name="star-o"
                size={30}
                color="rgba(0, 0, 0, 0.3)"
                style={{ marginHorizontal: 2.5 }}
              />

              <StarIcon
                name="star-o"
                size={30}
                color="rgba(0, 0, 0, 0.3)"
                style={{ marginHorizontal: 2.5 }}
              />
              <StarIcon
                name="star-o"
                size={30}
                color="rgba(0, 0, 0, 0.3)"
                style={{ marginHorizontal: 2.5 }}
              />
              <StarIcon
                name="star-o"
                size={30}
                color="rgba(0, 0, 0, 0.3)"
                style={{ marginHorizontal: 2.5 }}
              />
              <StarIcon
                name="star-o"
                size={30}
                color="rgba(0, 0, 0, 0.3)"
                style={{ marginHorizontal: 2.5 }}
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
                style={{
                  fontFamily: "EuclidCircularB-Regular",
                  fontSize: 12,
                  color: "rgba(0,0,0,0.6)",
                  textTransform: "uppercase",
                  marginLeft: -10,
                }}
              >
                Mauvais
              </Text>
              <Text
                style={{
                  fontFamily: "EuclidCircularB-Regular",
                  fontSize: 12,
                  color: "rgba(0,0,0,0.6)",
                  textTransform: "uppercase",
                  marginRight: -10,
                }}
              >
                Meilleur
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
