import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { scale, moderateScale, verticalScale } from 'react-native-size-matters'
import Tweet from './Tweet'
import { createStackNavigator } from '@react-navigation/stack'
import Candidates, { Individual } from './Screens';
import Profile from './Profile';
import SWipeNavBar from './SwipeNavBar';
import CreateJobPostingScreen from './CreateJobPosting';
import { JobProvider } from '../contexts/JobProvider';
import JobPostingsScreen from './JobPostingsScreen';
import { PostingProvider } from '../contexts/PostingProvider';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    flexDirection: "row",
    alignItems: "center",
    padding: scale(5),
    marginBottom: moderateScale(15),
    marginTop: verticalScale(15),
  },

  personalinfo: {
    alignItems: "center",
    marginLeft: moderateScale(45),
  },
  name: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
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
});

const Tab = createBottomTabNavigator();
const Card2Stack = createStackNavigator();
const NewStack = createStackNavigator();

const CandidateStack = createStackNavigator();

// This specific sfunction is for Stack Navigation into resume details
const CandidateScreen = () => (
  <CandidateStack.Navigator>
    <CandidateStack.Screen
      name="Candidates"
      component={Candidates}
      options={{
        headerShown: false,
      }}
    />
    <CandidateStack.Screen
      name="Individual"
      component={Individual}
      options={({ route, navigation }) => ({
        otherParam: route.params,
      })}
    />
  </CandidateStack.Navigator>
);

//////changed here card 2 stack
const Card2StackScreen = () => (
  <Card2Stack.Navigator>
    <Card2Stack.Screen
      name="Your Job Postings"
      component={JobPostingsScreen}
      options={({ route, navigation }) => (
        {
          headerShown: false,
          route: { route },
          navigation: { navigation }
        })}
    // options={{ headerShown: false }}
    />
    {/* options={
      //   { headerShown: false }} */}
    < Card2Stack.Screen
      name="Create Job Posting"
      component={CreateJobPostingScreen}
      options={({ route, navigation }) => ({
        otherParam: route.params,
      })}
    />
    <Card2Stack.Screen
      name="Search"
      component={SWipeNavBar}
      options={({ route, navigation }) => ({
        otherParam: route.params,
      })}
    />
  </Card2Stack.Navigator>
);


function NavTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f9aa33",
        tabBarInactiveTintColor: "#344955",
        tabBarActiveBackgroundColor: "#fafafa",
        tabBarInactiveBackgroundColor: "#fafafa",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Tweet}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Job Postings"
        component={Card2StackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="pin" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Applicants"
        component={CandidateScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="book-account"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

function AllTabs() {
  return (
    <NavigationContainer>
      <JobProvider>
        <PostingProvider>
          <NavTabs />
        </PostingProvider>
      </JobProvider>
    </NavigationContainer>
  );
}
export default AllTabs;

// rename second bottom to all Tabs
