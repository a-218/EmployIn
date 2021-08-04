
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import StarCandidates from './StarCandidates'
import InterviewOption from './InterviewOption';
import { scale, moderateScale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
import Tweet from './Tweet'

import { createStackNavigator } from '@react-navigation/stack'

// fake data for the skills sections
const DATA = [
  {
    id: 1,
    skill: 'Javascript',
  },
  {
    id: 2,
    skill: 'Library ',
  },
  {
    id: 3,
    skill: 'Angular',
  },
  {
    id: 4,
    skill: 'Express',
  },
];

function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* top part of the resume */}
      <SafeAreaView >
        <View style={styles.rightresume}>
          <Image
            style={styles.image} source={require("../../assets/Joey.jpeg")} />
          <View style={styles.personalinfo}>
            <Text style={styles.name}>Joey Trib</Text>
            <Text style={styles.phone}>778-123-4567</Text>
            <Text style={styles.email}>123456@gmail.com</Text>
          </View>
        </View>
        {/* Other parts of resume lke summary */}
        <View style={styles.bottomresume}>
          <View style={styles.skills}>
            <Text>Skills: Javascript</Text>
            <FlatList
              numColumns={2}
              data={DATA}
              renderItem={({ item }) => <Text style={styles.item}>{item.skill}</Text>}
            />
          </View>

          <View style={styles.summary}>
            <Text numberOfLines={4} ellipsizeMode='tail'>Summary:
              I worked for on-site at Canfor Pulp and Paper as a Process Engineer Co-op. I performed routine process monitoring and optimization, including calibrating pulp analyzers and assisting in troubleshooting equipment. I concluded this work term by outlining the annual losses from inefficiencies in wood chip handling, backed by process control data from the DeltaV Distributed Control System. I then provided several capital projects solutions. Throughout this term, I learned the importance of efficient communication and collaboration.
            </Text>
          </View>

          <View style={styles.experience}>
            <Text >Experience:</Text>
            <Text numberOfLines={4} ellipsizeMode='tail'>
              I worked for on-site at Canfor Pulp and Paper as a Process Engineer Co-op. I performed routine process monitoring and optimization, including calibrating pulp analyzers and assisting in troubleshooting equipment. I concluded this work term by outlining the annual losses
            </Text>

          </View>

          <View style={styles.links}>
            <Text>External Links</Text>
            <Text style={styles.linkedin}>https://www.linkedin.com/in/alexli0218</Text>
          </View>
        </View>

      </SafeAreaView>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderWidth: moderateScale(5),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(40),
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: 50,
    marginLeft: scale(10),
  },
  rightresume: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(5),
    marginBottom: moderateScale(15),
    marginTop: verticalScale(15),
  },

  personalinfo: {
    alignItems: 'center',
    marginLeft: moderateScale(45),
  },
  name: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    marginBottom: moderateScale(4),
  },
  phone: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
  },
  bottomresume: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),

  },
  skills: {
    borderWidth: 5,
    padding: moderateScale(10),
    borderRadius: 15,
    marginBottom: moderateScale(20),
  },
  summary: {
    borderWidth: 5,
    padding: moderateScale(10),
    borderRadius: 15,
    marginBottom: moderateScale(20),
  },
  experience: {
    borderWidth: 5,
    padding: moderateScale(10),
    borderRadius: 15,
    marginBottom: moderateScale(20),
  },
  links: {
    borderWidth: 5,
    padding: scale(15),
    borderRadius: 15,
    marginBottom: moderateScale(20),
  },
})


const Tab = createBottomTabNavigator();


function NavTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        "tabBarActiveTintColor": "black",
        "tabBarInactiveTintColor": "tomato",
        "tabBarActiveBackgroundColor": "lightblue",
        "tabBarInactiveBackgroundColor": "white",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen name="Home"
        component={Tweet}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='home' size={size} color={color} />
        }} />
      <Tab.Screen name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='magnify' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Candidates"
        component={StarCandidates}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='star' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Interviews"
        component={InterviewOption}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='application' size={size} color={color} />
        }} />

    </Tab.Navigator>
  );
}

function AllTabs() {
  return (
    <NavigationContainer>
      <NavTabs />
    </NavigationContainer>
  );
}
export default AllTabs;

// rename second bottom to all Tabs