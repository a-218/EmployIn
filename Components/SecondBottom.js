
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import SettingsScreen from './SettingScreen';


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

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* top part of the resume */}
      <SafeAreaView >
        <View style={styles.rightresume}>
          <Image
            style={styles.image} source={require("../assets/Joey.jpeg")} />
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
            <Text numberOfLines={5} ellipsizeMode='tail'>Summary:
              I worked for on-site at Canfor Pulp and Paper as a Process Engineer Co-op. I performed routine process monitoring and optimization, including calibrating pulp analyzers and assisting in troubleshooting equipment. I concluded this work term by outlining the annual losses from inefficiencies in wood chip handling, backed by process control data from the DeltaV Distributed Control System. I then provided several capital projects solutions. Throughout this term, I learned the importance of efficient communication and collaboration.
            </Text>
          </View>

          <View style={styles.experience}>
            <Text >Experience:</Text>
            <Text>
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
    borderWidth: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 40,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rightresume: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  square: {
    width: 24,
    height: 25,
    backgroundColor: 'red',
    opacity: 0.4
  },
  personalinfo: {
    alignItems: 'center',
    marginLeft: 40,
  },
  name: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10
  },
  phone: {
    fontSize: 18,
    marginBottom: 10
  },
  bottomresume: {
    marginLeft: 10,
    marginRight: 10,

  },
  skills: {
    borderWidth: 5,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  summary: {
    borderWidth: 5,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  experience: {
    borderWidth: 5,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  links: {
    borderWidth: 5,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
})





const Tab = createBottomTabNavigator();

function MyTabs() {
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
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
        }} />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='cog' size={size} color={color} />
        }} />
    </Tab.Navigator>
  );
}

function SecondBottom() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
export default SecondBottom;