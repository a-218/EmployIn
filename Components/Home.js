import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';
import { scale, moderateScale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'


const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Job Position 1',
    subcategory: [
      { id: 1, val: 'NAME', image: require("../assets/Joey.jpeg") },
      { id: 2, val: 'FIRSTNAME ', image: require("../assets/Joey.jpeg") }
    ]
  },
  {
    isExpanded: false,
    category_name: 'Job Position 2',
    subcategory: [
      { id: 3, val: 'Joey Trip', image: require("../assets/Joey.jpeg") },
      { id: 4, val: 'Joey Trip', image: require("../assets/Joey.jpeg") }
    ]
  },
]

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





function Home({ navigation, props }) {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>
              Company Name
            </Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>
        <View style={styles.item}>
          <View style={styles.pictureInfo}>
            <Image
              source={require("../assets/Joey.jpeg")} style={styles.picture}>
            </Image>
            <View style={styles.namePosition}>
              <Text style={styles.name}>Tony Stark</Text>
              <Text>CEO OF THIS COMPANY</Text>
            </View>
          </View>
          <View>
            <Text style={styles.msg}>somthing is omthing is really baddddddd really baddddddd omthing is really badddddddomthing is really baddddddd</Text>
          </View>

        </View>



      </ScrollView>

    </SafeAreaView >
  );
}

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
    backgroundColor: '#11B5E4',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginBottom: moderateVerticalScale(20),
  },
  pictureInfo: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(10)
  },
  msg: {
    marginTop: moderateScale(10),
    textAlign: 'left',
    marginLeft: moderateScale(20),
  }

});


export default Home;