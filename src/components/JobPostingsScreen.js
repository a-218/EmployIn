import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { PostingContext } from '../contexts/PostingProvider';
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";


function JobPostingsScreen({ navigation, route }) {

  const [jobPosts, setJobPosts] = useState([
    {
      id: 1,
      title: 'Full Web Developer',
      description: " Salary: $85,000 \n 9-5, Mon-Thurs \n Calgary, Alberta \nDeveloper with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.",
      industry: ' Tech/Web development',
    },
    {
      id: 2,
      title: 'Junior Stack Developer',
      description: " Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.,",
      industry: 'Tech/Web development',
    },
    {
      id: 3,
      title: 'Back End Developer',
      description: " Salary: $70,000 \n 9-5, Mon-Fri \n Calgary, Alberta \nAs a backend developer on the team, you’ll be responsible for building markup functionality in our backend service written in Python and using Postgres as our database. The team is cross-functional, so there are opportunities to contribute to the web frontend (Typescript and React) as well as our Android and iOS apps. We also use Kotlin Multiplatform to implement cross-platform code in a shared library.",
      industry: ' Tech/Web development',
    },
  ]
  )


  const newJobPost = useContext(PostingContext)

  function addNewJobPost() {
    // New object of post
    if (!route.params) {
      return;
    }


    const jobPost = {
      id: jobPosts[jobPosts.length - 1].id + 1,
      title: route.params.title,
      description: route.params.description,
      industry: route.params.industry,
    };

    setJobPosts((prev) => [...prev, jobPost]);

    const newState = [...newJobPost.Posting, jobPost]
    newJobPost.setPosting(newState)

  }

  console.log("beofre top");



  useEffect(() => {
    addNewJobPost();
  }, [route.params]);

  // Loads initial and new tweets
  function loadJobPosts({ navigation }) {

    // function loadJobPosts() {
    const jobPostsCopy = [...jobPosts];
    // Reverse the posts state so we can append the new posts at the top instead of the bottom

    const loadJobPosts = jobPostsCopy.map((post) => {

      return (
        <TouchableOpacity key={post.id} onPress={() => navigation.navigate('Search', {
          itemId: post.id,
          otherParam: 'anything you want here',
        })}>

          <View style={styles.jobpost} key={post.id}>
            <Text style={{ ...styles.title, color: "black" }}>
              {post.title}
            </Text>

            <Text style={styles.description}>
              Industry:
              <Text style={{ ...styles.text, color: "black" }}>
                {post.industry}
              </Text>
            </Text>

            <Text style={styles.description}>Job Description:</Text>

            <Text style={{ ...styles.text, color: "black" }}>
              {post.description}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return loadJobPosts;
  }

  console.log("after the top");
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text
          style={{ ...styles.header, color: "#f9aa33", fontWeight: "bold" }}
        >
          Your Job Postings!
        </Text>
      </View>
      <ScrollView>

        {/* --------------------------------New Job Postin -------------------------------------- */}

        {loadJobPosts({ navigation })}

        {/* {loadJobPosts()} */}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Create Job Posting")}
      >
        <MaterialCommunityIcons name="folder-plus" style={styles.buttonText}>
          New
        </MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  );
}


export default JobPostingsScreen;

const margin = {
  marginLeft: moderateScale(5),
  marginRight: moderateScale(5),
  marginTop: moderateScale(5),
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#eeeeee",
    paddingTop: moderateScale(10),
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    marginBottom: moderateScale(10),
    marginTop: moderateScale(40),
  },
  jobpost: {
    backgroundColor: "#fafafa",
    borderRadius: moderateScale(20),
    marginBottom: moderateVerticalScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  title: {
    ...margin,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#344955",
    marginRight: moderateScale(10),
    marginLeft: moderateScale(15),
  },
  text: {
    fontSize: 15,
    marginRight: moderateScale(15),
    marginLeft: moderateScale(15),
    paddingBottom: moderateScale(15),
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#f9aa33",
    borderBottomColor: "#f9aa33",
    paddingTop: moderateScale(5),
    borderRadius: moderateScale(20),
    borderBottomWidth: moderateScale(4),
    height: moderateScale(30),
    justifyContent: "space-evenly",
    marginTop: moderateScale(5),
    marginBottom: moderateScale(15),
    padding: moderateScale(1),
    width: moderateScale(100),
    shadowColor: "grey",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 18,
  },
});
