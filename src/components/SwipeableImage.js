import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";

export function SearchScreen({ user, route, navigation }) {

  console.log('after i press the job posts, it i sover here')

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        borderRadius: moderateScale(20),
      }}
    >
      <View style={styles.container}>
        <View style={styles.identity}>
          <Image source={{ uri: user.img_url }} style={styles.image} />

          <View style={styles.personalinfo}>
            <Text style={{ ...styles.name }}>{user.name}</Text>
            <View style={styles.info}>
              <FontAwesome
                style={styles.phoneicon}
                name="phone"
                size={18}
                color="black"
              >
                :
              </FontAwesome>
              <Text style={(styles.phone, { color: "black" })}>
                {user.phone_number}
              </Text>
            </View>

            <View style={styles.info}>
              <FontAwesome
                style={styles.envelopeicon}
                name="envelope"
                size={17}
                color="black"
              >
                :
              </FontAwesome>
              <Text style={(styles.email, { color: "black" })}>
                {user.email}
              </Text>
            </View>
          </View>
        </View>

        {/* Other parts of resume like summary */}
        <View style={styles.resumecontent}>
          <View style={styles.skills}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Skills:
            </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{ color: "black" }}
            >
              {user.skills}
            </Text>
          </View>

          <View style={styles.summary}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Summary:
            </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{ color: "black" }}
            >
              {user.summary}
            </Text>
          </View>

          <View style={styles.experience}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Experience:
            </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{ color: "black" }}
            >
              {user.experience}
            </Text>
          </View>

          <View style={styles.links}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
              Links:
            </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{ color: "black" }}
            >
              {user.external_links.join(', ')}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function SwipeableImage({ user, willLike, willPass }) {
  return (
    <View>
      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: "black", fontSize: 20 }}>
            SAVE
          </Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: "black", fontSize: 20 }}>
            PASS
          </Text>
        </View>
      )}

      <SearchScreen user={user} />
    </View>
  );
}

const boxStyle = {
  position: "absolute",
  top: "45%",
  padding: moderateScale(20),
  borderWidth: moderateScale(1),
  borderRadius: moderateScale(10),
};

const resumeSections = {
  backgroundColor: "#fafafa",
  borderWidth: moderateScale(2),
  padding: moderateScale(5),
  borderRadius: moderateScale(15),
  marginBottom: moderateScale(15),
  shadowColor: "grey",
  shadowOpacity: 1,
  shadowOffset: {
    width: 3,
    height: 3,
  },
};

const styles = StyleSheet.create({
  likeBox: {
    ...boxStyle,
    left: moderateScale(20),
    backgroundColor: "#9BC1BC",
    zIndex: 999,
  },
  passBox: {
    ...boxStyle,
    right: moderateScale(20),
    borderColor: "#F06795",
    backgroundColor: "#ED6A5A",
    zIndex: 999,
  },
  bg: {
    width: "100%",
  },

  container: {
    height: "100%",
    backgroundColor: "#fafafa",
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(2),
  },

  personalinfo: {
    alignItems: "flex-start",
  },
  info: {
    flexDirection: "row",
  },
  image: {
    width: moderateScale(85),
    height: moderateScale(85),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: moderateScale(5),
    width: 225,
  },
  phone: {
    fontSize: 18,
    marginBottom: moderateScale(5),
  },
  email: {
    fontSize: 18,
    marginBottom: moderateScale(5),
  },

  identity: {
    flexDirection: "row",
    alignItems: "center",
    // padding: (5),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(10),
  },
  resumecontent: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
  },

  skills: {
    ...resumeSections,
  },
  summary: {
    ...resumeSections,
  },
  experience: {
    ...resumeSections,
  },
  links: {
    ...resumeSections,
  },
  phoneicon: {
    marginLeft: moderateScale(2),
    marginRight: moderateScale(4),
  },
  envelopeicon: {
    marginRight: moderateScale(5),
  },
});
