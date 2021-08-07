import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';
import { scale, moderateScale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',

  },
  titleText: {
    flex: 1,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: moderateScale(20)
  },
  item: {
    backgroundColor: 'lightblue',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginBottom: moderateVerticalScale(20),
  },
  itemText: {
    fontSize: moderateScale(16),
    fontWeight: '500'
  },

  text: {
    fontSize: moderateScale(16),

    textAlign: 'left',
    flexShrink: 1



  },
  separator: {
    height: 0.9,
    backgroundColor: 'black',
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginBottom: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(10),
    width: '88%'
  },
  content: {
    alignItems: 'flex-start',

  },
  subimage: {
    marginLeft: moderateScale(40),
    width: 80,
    height: 80,
    borderRadius: 40,


  },
  subsections: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  callEmail: {

    flexDirection: 'row',
    alignItems: 'center',

    fontSize: moderateScale(16),
    padding: 20,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    flexWrap: 'wrap',

  },
  customButton1: {

    backgroundColor: "#5DA9E9",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30
  },

  customButton2: {
    marginLeft: 15,
    backgroundColor: "#5DA9E9",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30
  },
  image: {
    width: (90),
    height: (90),
    borderRadius: 50,
    marginLeft: (10),
  },

  rightresume: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: (5),
    marginBottom: (15),
    marginTop: (15),
    borderRadius: 10,
  },

  container: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 5,
  },

  personalinfo: {

    paddingLeft: moderateScale(10)
  },

  name: {
    fontSize: (32),
    fontWeight: 'bold',
    marginBottom: (4),
  },

  phone: {
    fontSize: (18),
    marginBottom: (10),
  },

  bottomresume: {
    marginLeft: (10),
    marginRight: (10),
  },

  skills: {
    borderWidth: 5,
    padding: (10),
    borderRadius: 15,
    marginBottom: (20),
  },

  summary: {
    borderWidth: 5,
    padding: (10),
    borderRadius: 15,
    marginBottom: (20),
  },
  experience: {
    borderWidth: 5,
    padding: (10),
    borderRadius: 15,
    marginBottom: (20),
  },

  links: {
    borderWidth: 5,
    padding: (15),
    borderRadius: 15,
    marginBottom: (20),
  },


});


export default styles;