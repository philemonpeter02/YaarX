import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgBackArrow } from "../components/Svg";
import NotificationsCard from "../components/NotificationsCard";

const NotificationsScreen = ({ navigation }) => {
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
          Notifications
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            flex: 1,
            paddingVertical: 10,
          }}
        >
          <NotificationsCard />
          <NotificationsCard />
          <NotificationsCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

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
