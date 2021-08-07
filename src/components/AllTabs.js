
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
import Candidates, { Home2, Details, New2, resumeDetails, Individual } from './Screens';

import useApplicationData from '../hooks/useApplicationData';
import Profile from './Profile';
import { SearchScreen } from './SwipeableImage';
import SWipeNavBar from './SwipeNavBar';
import CreateJobPostingScreen from './CreateJobPosting';


// import { ApplicantProvider } from './Context';
import { JobProvider } from './JobProvider';
import JobPostingsScreen from './JobPostingsScreen';


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



// function SearchScreen() {

//   return (
//     <View style={styles.container}>
//       {/* top part of the resume */}
//       <SafeAreaView >
//         <View style={styles.rightresume}>
//           <Image
//             style={styles.image} source={require("../../assets/Joey.jpeg")} />
//           <View style={styles.personalinfo}>
//             <Text style={styles.name}>{applicantDBState.map(applicant => {
//               <div>{applicant.name} </div>
//             })}</Text>
//             <Text style={styles.phone}>{applicantDBState[0].name}</Text>
//             <Text style={styles.email}>{ }</Text>
//           </View>
//         </View>
//         {/* Other parts of resume lke summary */}
//         <View style={styles.bottomresume}>
//           <View style={styles.skills}>
//             <Text>Skills: Javascript</Text>
//             <FlatList
//               numColumns={2}
//               data={DATA}
//               renderItem={({ item }) => <Text style={styles.item}>{item.skill}</Text>}
//             />
//           </View>

//           <View style={styles.summary}>
//             <Text numberOfLines={4} ellipsizeMode='tail'>Summary:
//               { }
//             </Text>
//           </View>

//           <View style={styles.experience}>
//             <Text >Experience:</Text>
//             <Text numberOfLines={4} ellipsizeMode='tail'>
//               { }
//             </Text>

//           </View>

//           <View style={styles.links}>
//             <Text>External Links</Text>
//             <Text style={styles.linkedin}></Text>
//           </View>
//         </View>

//       </SafeAreaView>
//     </View >
//   );
// }




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
const Home2Stack = createStackNavigator();
const NewStack = createStackNavigator();

const CandidateStack = createStackNavigator();

// This specific sfunction is for Stack Navigation into resume details
const CandidateScreen = () => (
  <CandidateStack.Navigator>
    <CandidateStack.Screen
      name="Candidates"
      component={Candidates}
      options={{
        headerShown: false
      }} />
    <CandidateStack.Screen
      name="Individual"
      component={Individual}
      options={({ route, navigation }) => ({

        otherParam: route.params
      })}
    />
  </CandidateStack.Navigator>
);


// const NewStackScreen = () => (
//   <NewStack.Navigator>
//     <NewStack.Screen name="NewScreen2" component={New2} />
//     <NewStack.Screen
//       name="Details"
//       component={Details}
//       options={({ route }) => ({
//         title: route.params.name
//       })}
//     />
//   </NewStack.Navigator>
// );


// const Home2StackScreen = () => (
//   <Home2Stack.Navigator>
//     <Home2Stack.Screen name="Home2" component={Home2} />
//     <Home2Stack.Screen
//       name="Details"
//       component={Details}
//       options={({ route }) => ({
//         title: route.params.name
//       })}
//     />
//   </Home2Stack.Navigator>
// );

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
        component={SWipeNavBar}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='briefcase' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Applicants"
        component={CandidateScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='book-account' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='account' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Create Job Posting"
        component={CreateJobPostingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='account' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Job Posting"
        component={JobPostingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) =>
            <MaterialCommunityIcons name='account' size={size} color={color} />
        }} />
    </Tab.Navigator>
  );
}

function AllTabs() {
  return (
    <NavigationContainer>
      <JobProvider>
        <NavTabs />
      </JobProvider>
    </NavigationContainer>
  );
}
export default AllTabs;

// rename second bottom to all Tabs