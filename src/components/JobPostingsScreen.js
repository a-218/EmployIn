import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from "react-native-size-matters";
const newPosting = createStackNavigator();


function JobPostingsScreen({ navigation, route }) {

  const [jobPosts, setJobPosts] = useState([{

    id: '',
    title: 'Junior Web Developer',
    description: 'somthing about coding',
    industry: 'Tech/Web development'
  }])

  console.log('at the top', jobPosts.length)
  console.log('the JOB POSTS object', jobPosts)

  console.log('after the form is submitted,', route.params)

  function addNewJobPost() {

    // New object of post
    if (!route.params) {
      return
    }
    const jobPost = {
      id: jobPosts[jobPosts.length - 1].id + 1,
      title: route.params.title,
      description: route.params.description,
      industry: route.params.industry

    };
    // Add new post into state

    setJobPosts((prev) => [...prev, jobPost]);

  }

  console.log('beofre top')

  //  const setJobs = Jobs =>setJobPosts([...])
  useEffect(() => {
    addNewJobPost()
  }, [route.params])

  // Loads initial and new tweets
  function loadJobPosts() {

    const jobPostsCopy = [...jobPosts];
    // Reverse the posts state so we can append the new posts at the top instead of the bottom

    const loadJobPosts = jobPostsCopy.map((post) => {
      return (
        <TouchableOpacity key={post.id} onPress={() => navigation.navigate('Search')}>
          <View style={styles.jobpost} key={post.id}>
            <Text style={{ ...styles.title, color: 'black' }}>
              {post.title}
            </Text>

            <Text style={{ ...styles.description, color: 'blue' }}>
              Industry: 
              <Text style={{ ...styles.text, color: 'black' }}>
                {post.industry}
              </Text>
            </Text>

            <Text style={{ ...styles.description, color: 'blue' }}>
              Job Description:
            </Text>

            <Text style={{ ...styles.text, color: 'black' }}>
              {post.description}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
    return loadJobPosts;
  }
  console.log('after the top')
  return (

    <View style={{ flex: 1 ,backgroundColor: "#2d3047"}}>
      <View>
        <Text style={{...styles.header, color: 'tomato'}}>
          Your Job Postings!

        </Text>
      </View>
      {/* --------------------------------Posting 1-------------------------------------- */}
      <ScrollView style={{ backgroundColor: "#2d3047"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.jobpost}>
            <Text style={{ ...styles.title, color: 'black' }}>
              Full Stack Web Developer
            </Text>

            <Text style={{ ...styles.description, color: 'blue'}}>
              Industry:
            </Text>

            <Text style={{ ...styles.description, color: 'blue' }}>
              Job Description:
            </Text>

            <Text style={{ ...styles.text, color: 'black' }}>
              Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.
              Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.
            </Text>

          </View>
        </TouchableOpacity>
        {/* --------------------------------New Job Postin -------------------------------------- */}

        {loadJobPosts()}

      </ScrollView>

        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Create Job Posting')}>
          <MaterialCommunityIcons name='folder-plus' style={styles.buttonText}>New</MaterialCommunityIcons>
        </TouchableOpacity>

    </View>
  );
}

// const link = () =>{
//   const navigation = useNavigation();
//   return (

//     onPress={() => navigation.navigate('Search')});
// }

export default JobPostingsScreen;

const margin = {
  marginLeft: moderateScale(5),
  marginRight: moderateScale(5),
  marginTop: moderateScale(5),
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontSize: 25,
    marginBottom: moderateScale(10),
    marginTop: moderateScale(40),
  },
  jobpost: {
    backgroundColor: 'white',
    borderColor: '#f5f5f5',
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(3),
    marginBottom: moderateVerticalScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
  },
  title: {
    ...margin,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 20,
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
    alignSelf: 'center',
    backgroundColor: "tomato",
    borderBottomColor: 'red',
    borderRadius: moderateScale(4),
    borderBottomWidth: moderateScale(4),
    height: moderateScale(30),
    justifyContent: 'space-around',
    marginTop: moderateScale(5),
    marginBottom: moderateScale(5),
    padding: moderateScale(1),
    width: moderateScale(100),
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 18,
  }
})