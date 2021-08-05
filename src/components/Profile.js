import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager, ImageBackground } from 'react-native';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler';
function Profile({ navigation, props }) {
  const image = { uri: "https://reactjs.org/logo-og.png" };



  return (
    <View>
      <ScrollView style={{ backgroundColor: 'white' }}>

        <View style={styles.back}>
          <Image source={require('../../assets/0042.webp')} style={styles.icon2} />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/icons.png')} style={styles.icon} />
          <Text style={styles.title}> Employin</Text>
        </View>
        <View style={styles.location}>
          <FontAwesome name="industry" style={styles.wording}></FontAwesome>
          <Text style={styles.wording}>Industry: </Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="phone" style={styles.wording}></FontAwesome>
          <Text style={styles.wording}>Contacts: </Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="compass" style={styles.wording}></FontAwesome>
          <Text style={styles.wording}>Location: </Text>
        </View>

        <View style={styles.location}>
          <FontAwesome name="dollar" style={styles.wording}></FontAwesome>
          <Text style={styles.wording}>Stock: </Text>
        </View>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  back: {

    width: '100%',
    backgroundColor: 'lightblue',
    height: 200,
  },
  icon: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -70,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,

  },
  location: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'right',
    backgroundColor: '#fff',
    width: '90%',
    paddingBottom: 22,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    marginTop: 20,
    marginBottom: 30, shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  wording: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 15,
  },
  icon2: {

    width: '100%',
    backgroundColor: 'lightblue',
    height: 200,
  }



})
export default Profile;