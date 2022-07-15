import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NotificationsCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderColor: "#F5F5F6",
        borderBottomWidth: 5,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
      }}
    >
      <View style={styles.listBox}>
        <Image
          source={require("../assets/images/Ellipse.png")}
          resizeMode="contain"
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text
            style={[
              styles.text,
              {
                fontFamily: "EuclidCircularB-Regular",
                fontSize: 12,
                color: "rgba(0, 0, 0, 1)",
              },
            ]}
          >
            Promo spéciale du jour
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: "EuclidCircularB-Regular",
                  fontSize: 14,
                  color: "#FCC014",
                },
              ]}
            >
              Voir les détails
            </Text>
            <Text
              style={[
                styles.text,
                {
                  marginLeft: 25,
                  fontFamily: "EuclidCircularB-Regular",
                  fontSize: 14,
                  color: "rgba(0,0,0,0.3)",
                },
              ]}
            >
              Il y a 3 heures
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationsCard;

const styles = StyleSheet.create({
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
