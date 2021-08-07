import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

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
      );
    });
    return loadJobPosts;
  }
  console.log('after the top')
  return (


    <View style={{ flex: 1 }}>

      <View >
        <Text style={styles.header}>
          Your Job Postings!
        </Text>
      </View>
      {/* --------------------------------Posting 1-------------------------------------- */}
      <ScrollView>
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

        {/* --------------------------------Posting 2-------------------------------------- */}

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

        {/* --------------------------------Posting 3-------------------------------------- */}

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
        {/* --------------------------------New Job Postin -------------------------------------- */}
        {loadJobPosts()}
      </ScrollView>

    </View>
  );
}

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
})