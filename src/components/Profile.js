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
  const [price, setPrice] = useState((Math.random() * 100).toFixed(2));

  function liveStockUpdate() {
    const newPrice = Math.random() * 100;
    setPrice(newPrice.toFixed(2));
  }

  function loadStock() {
    return price;
  }

  return (
    <View>
      <ScrollView style={{ backgroundColor: "#eeeeee" }}>
        <View style={styles.back}>
          <Image
            source={require("../../assets/stonks.png")}
            style={styles.icon2}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/lego/6.jpg" }}
            style={styles.icon}
          />
          <Text style={{ ...styles.title, color: "#f9aa33" }}>EmployIn</Text>
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
          <FontAwesome name="dollar" style={styles.wording}></FontAwesome>
          <Text style={styles.wording}>Stock: ${loadStock()} Trillion</Text>
        </View>
        <View style={styles.shadow}>
          <TouchableOpacity
            style={styles.postButton}
            title="Post"
            color="#11B5E4"
            onPress={() => liveStockUpdate()}
          >
            <Text
              style={{
                color: "#344955",
                fontWeight: "bold",
                textAlignVertical: "center",
              }}
            >
              Live Stock Update
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.location}>
          <Text style={styles.wording}>
            We are a company that likes to employ those with super powers like
            Natasha Romanov, the strongest Avengers. We occasionally do enjoy
            some sunny side up eggs during breakfast, and we like to gamble with
            our stock prices.
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
    backgroundColor: "#fafafa",
    width: "90%",
    paddingBottom: 15,
    borderRadius: moderateScale(20),
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 20,
    marginTop: 20,
    // marginBottom: 30,
    shadowColor: "grey",
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
  postButton: {
    // flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    height: 40,
    width: "90%",
    margin: 12,
    marginTop: 30,
    backgroundColor: "#f9aa33",
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    borderRadius: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});
export default Profile;
