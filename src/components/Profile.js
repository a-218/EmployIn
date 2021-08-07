import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Button,
  ScrollView,
  TextComponent,
  LayoutAnimation,
  Platform,
  UIManager,
  ImageBackground,
} from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";

function Profile({ navigation, props }) {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return (
    <View>
      <ScrollView style={{ backgroundColor: "#2d3047" }}>
        <View style={styles.back}>
          <Image
            source={require("../../assets/0042.webp")}
            style={styles.icon2}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/lego/6.jpg" }}
            style={styles.icon}
          />
          <Text style={{ ...styles.title, color: "#e3655b" }}>EmployIn</Text>
        </View>
        <View style={styles.location}>
          <FontAwesome name="industry" style={styles.wording}>
            :
          </FontAwesome>
          <Text style={styles.wording}>Lego Construction</Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="envelope" style={styles.wording}>
            :
          </FontAwesome>
          <Text style={styles.wording}>Employ@In.awesome</Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="phone" style={styles.wording}>
            :
          </FontAwesome>
          <Text style={styles.wording}>1-800-EmployIn</Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="location-arrow" style={styles.wording}>
            :
          </FontAwesome>
          <Text style={styles.wording}>Canada</Text>
        </View>

        <View style={styles.location}>
          <Text style={styles.wording}>
            We are a company that likes to employ those with super powers like
            Natasha Romanov, the strongest Avengers. We occasionally do enjoy
            some sunny side up eggs during breakfast.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back: {
    width: "100%",
    backgroundColor: "lightblue",
    height: 200,
  },
  icon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -70,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  location: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "right",
    backgroundColor: "#f5f5f5",
    width: "90%",
    paddingBottom: 22,
    borderRadius: moderateScale(20),
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 20,
    marginTop: 20,
    marginBottom: 30,
    shadowColor: "tomato",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  wording: {
    marginTop: 15,
    fontSize: 20,
    textAlign: "left",
    marginLeft: 15,
  },
  icon2: {
    width: "100%",
    backgroundColor: "lightblue",
    height: 200,
  },
});
export default Profile;
