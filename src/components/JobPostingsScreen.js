import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
// const newPosting = createStackNavigator();
import { PostingContext } from '../contexts/PostingProvider';

function JobPostingsScreen({ navigation, route }) {

  const [jobPosts, setJobPosts] = useState([
    {
      id: 1,
      title: 'Full Web Developer',
      description: " Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.,",
      industry: 'Tech/Web development',
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
      description: " Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.,",
      industry: 'Tech/Web development',
    },
  ])
  //  const [jobPosts, setJobPosts] = useState([{ }])
  // console.log('at the top', jobPosts.length)
  // console.log('the JOB POSTS object', jobPosts)

  const newJobPost = useContext(PostingContext)

  //  console.log('after the form is submitted,', route.params)

  function addNewJobPost() {

    // New object of post
    if (!route.params) {
      return
    }
    // const jobPost = {
    //   id: jobPosts[jobPosts.length - 1].id + 1,
    //   title: route.params.title,
    //   description: route.params.description,
    //   industry: route.params.industry

    // };

    const jobPost = {
      id: jobPosts[jobPosts.length - 1].id + 1,
      title: route.params.title,
      description: route.params.description,
      industry: route.params.industry

    };
    // Add new post into state
    //  console.log('job Post over here IdidIDIDIDIDIDIIDIDID', jobPost.id)
    setJobPosts((prev) => [...prev, jobPost]);

    const newState = [...newJobPost.Posting, jobPost]
    newJobPost.setPosting(newState)



  }

  console.log('beofre top')


  //  const setJobs = Jobs =>setJobPosts([...])
  useEffect(() => {
    addNewJobPost()
  }, [route.params])

  // Loads initial and new tweets
  function loadJobPosts({ navigation }) {

    const jobPostsCopy = [...jobPosts];
    // Reverse the posts state so we can append the new posts at the top instead of the bottom

    const loadJobPosts = jobPostsCopy.map((post) => {

      return (
        <TouchableOpacity key={post.id} onPress={() => navigation.navigate('Search', {
          itemId: post.id,
          otherParam: 'anything you want here',
        })}>
          {/* {console.log('this is the post ID ', post.id)} */}
          <View style={styles.jobpost} key={post.id}>
            <Text style={{ ...styles.title, color: 'black' }}>
              {post.title}
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Industry: {post.industry}
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
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

  return (

    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.header}>
          Your Job Postings!
        </Text>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Create Job Posting')}>
          <MaterialCommunityIcons name='plus' style={styles.buttonText}>New</MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      {/* --------------------------------Posting 1-------------------------------------- */}
      <ScrollView>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.jobpost}>
            <Text style={{ ...styles.title, color: 'black' }}>
              Full Stack Web Developer
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Industry:
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Job Description:
            </Text>

            <Text style={{ ...styles.text, color: 'black' }}>
              Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.
              Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.
            </Text>

          </View>
        </TouchableOpacity> */}
        {/* --------------------------------Posting 2-------------------------------------- */}
        {/* <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.jobpost}>
            <Text style={{ ...styles.title, color: 'black' }}>
              Full Stack Web Developer
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Industry:
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Job Description:
            </Text>

            <Text style={{ ...styles.text, color: 'black' }}>
              Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.
              Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.
              Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.
              Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.
            </Text>
          </View>
        </TouchableOpacity> */}
        {/* --------------------------------Posting 3-------------------------------------- */}
        {/* <TouchableOpacity onPress={() => navigation.push('Search')}>
          <View style={styles.jobpost}>
            <Text style={{ ...styles.title, color: 'black' }}>
              Full Stack Web Developer
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Industry:
            </Text>

            <Text style={{ ...styles.description, color: 'black' }}>
              Job Description:
            </Text>

            <Text style={{ ...styles.text, color: 'black' }}>
              Developer with several years developing for the web. Must have a passion for creating responsive, user friendly web interfaces.
              Strong understanding of javascript (outside of a framework)-Good understanding of web application lifecycles-Experience in, React, Typescript, Node.js, Bootstrap, CSS, LESS, HTML-Development experience in C#, ASP.net core-Ability to debug and understand existing code bases.
            </Text>
          </View>
        </TouchableOpacity> */}
        {/* --------------------------------New Job Postin -------------------------------------- */}

        {loadJobPosts({ navigation })}

      </ScrollView>

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
  marginTop: '5%',
  marginRight: '5%',
  marginLeft: '5%',
}

const styles = StyleSheet.create({
  header: {
    marginTop: '15%',
    alignSelf: 'center',
    fontSize: 20,
  },
  jobpost: {
    ...margin,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 5,
  },
  title: {
    ...margin,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginRight: '5%',
    marginLeft: '5%',
    fontSize: 20,
  },
  text: {
    marginRight: '5%',
    marginLeft: '5%',
    paddingBottom: '5%',
    fontSize: 15,
  },
  button: {
    alignSelf: 'center',
    width: '40%',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "green",
    padding: 5,
    borderRadius: 50,


  },
  buttonText: {

    alignSelf: 'center',
    fontSize: 15,


  }
})