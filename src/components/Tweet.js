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
  TextInput,
} from "react-native";
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";

function Tweet({ navigation, props }) {
  const [text, onChangeText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Dr. Bruce Banner",
      occupation: "Nuclear Physicists",
      message: "Honestly, why do the avengers even care who's the strongest?",
      img_url: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    {
      id: 2,
      name: "Thor Odinson",
      occupation: "King of Asgard",
      message:
        "Let's have a spar @Tony Stark and we shall see who's the strongest.",
      img_url: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      id: 3,
      name: "Natasha Romanov",
      occupation: "Agent of S.H.I.E.L.D.",
      message:
        "My death better be worth it for that stupid stone or I'll come back to life and haunt you all.",
      img_url: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 4,
      name: "Tony Stark",
      occupation: "CEO of Avengers",
      message: "I am the strongest avenger.",
      img_url: "https://randomuser.me/api/portraits/lego/0.jpg",
    },
  ]);

  // This is our default profile pic for the business account
  const defaultImgURL = "https://randomuser.me/api/portraits/lego/6.jpg";

  function addNewPost() {
    if (text !== "") {
      // New object of post
      const newPost = {
        id: posts[posts.length - 1].id + 1,
        name: "Egg Eggerson",
        occupation: "EmployIn Recruiter",
        message: text,
        img_url: defaultImgURL,
      };

      // Add new post into state
      setPosts((prev) => [...prev, newPost]);
    }

    // Reset the text in the 'new post' text input
    onChangeText("");
  }

  // Loads initial and new tweets
  function loadPosts() {
    const postsCopy = [...posts];
    // Reverse the posts state so we can append the new posts at the top instead of the bottom
    const reversePosts = postsCopy.reverse();
    const loadPosts = reversePosts.map((post) => {
      return (
        <View style={styles.item} key={post.id} id={post.id}>
          <View style={styles.pictureInfo}>
            <Image source={{ uri: post.img_url }} style={styles.picture} />
            <View style={styles.namePosition}>
              <Text style={styles.name}>{post.name}</Text>
              <Text style={{ color: "#512d38" }}>{post.occupation}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>{post.message}</Text>
          </View>
        </View>
      );
    });
    return loadPosts;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#2d3047" }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>EmployIn Chatter</Text>
          </View>
        </View>
        <View style={styles.newPost}>
          <TextInput
            style={{ ...styles.textInput, color: "tomato" }}
            placeholder="New post"
            placeholderTextColor="#e3655b"
            value={text}
            onChangeText={(text) => onChangeText(text)}
          ></TextInput>
          <View style={styles.shadow}>
            <TouchableOpacity
              style={styles.postButton}
              title="Post"
              color="#11B5E4"
              onPress={() => addNewPost()}
            >
              <Text style={{ color: "#2d3047", fontWeight: "bold" }}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loadPosts()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  titleText: {
    flex: 1,
    color: "#e3655b",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: moderateScale(20),
  },
  item: {
    backgroundColor: "#f5f5f5",
    elevation: 20,
    padding: moderateScale(20),
    borderRadius: moderateScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginBottom: moderateVerticalScale(20),
    shadowOpacity: 1,
    shadowColor: "tomato",
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  pictureInfo: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  picture: {
    // zIndex: 999,
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    marginBottom: moderateScale(10),
  },
  namePosition: {
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  msg: {
    marginTop: moderateScale(10),
    textAlign: "left",
    marginLeft: moderateScale(20),
  },
  textInput: {
    flex: 1,
    height: 40,
    marginBottom: 12,
    marginTop: 12,
    marginLeft: 12,
    borderWidth: 1,
    paddingLeft: moderateScale(10),
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(40),
  },
  postButton: {
    // flex: 1,
    height: 40,
    width: 60,
    margin: 12,
    backgroundColor: "#e3655b",
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    marginRight: moderateScale(20),
    borderRadius: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  newPost: {
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#87baab",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
});

export default Tweet;
