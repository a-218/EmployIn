import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const newPosting = createStackNavigator();


function JobPostingsScreen({ navigation, route }) {

  const [JobPost, setJobPost] = useState({
    title: '',
    industry: '',
    description: '',
  })
  const { title, industry, description } = route.params

  function addJobs() {
    console.log('add jobs title', title)
    const newPost = {
      title: title,
      industry: industry,
      description: description
    }
    setJobPost((prev) => [...prev, newPost])



    return addJobs;
  }




  return (


    <View style={{ flex: 1 }}>

      <View >
        <Text style={styles.header}>
          Your Job Postings!
          {console.log('in the job positing', route.params.description)}
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
        {addJobs()}
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