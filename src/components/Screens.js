import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale, moderateScale, verticalScale, moderateVerticalScale } from 'react-native-size-matters'
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import resumeDetails from './resumeDetails';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginVertical: 10,
//     borderRadius: 5
//   }
// });


const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Job Position 1',
    subcategory: [
      { id: 1, val: 'NAME', image: require("../../assets/Joey.jpeg"), experience: 'sdfsdfsdfdsf' },
      { id: 2, val: 'FIRS ', image: require("../../assets/Joey.jpeg"), experience: 'sdsdsdsdsdsd' }
    ]
  },
  {
    isExpanded: false,
    category_name: 'Job Position 2',
    subcategory: [
      { id: 3, val: 'Joey Trip', image: require("../../assets/Joey.jpeg") },
      { id: 4, val: 'Joey Trip', image: require("../../assets/Joey.jpeg") }
    ]
  },
]

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

// export const Home2 = ({ navigation }) => (
//   <ScreenContainer>
//     <Text>Master List Screen</Text>
//     <Button
//       title="React Native by Example"
//       onPress={() =>
//         navigation.push("Details", { name: "React Native by Example " })
//       }
//     />
//     <Button
//       title="React Native School"
//       onPress={() =>
//         navigation.push("Details", { name: "React Native School" })
//       }
//     />

//   </ScreenContainer>
// );


// export const New2 = ({ navigation }) => (
//   <ScreenContainer>
//     <Text>Details Screen</Text>

//     <Button
//       title="React Native School"
//       onPress={() =>
//         navigation.push("Details", { name: "React Native School" })
//       }
//     />
//   </ScreenContainer>
// );

// export const Details = ({ route }) => (
//   <ScreenContainer>
//     <Text>Details Screen</Text>
//     {route.params.name && <Text>{route.params.name}</Text>}
//   </ScreenContainer>
// );





// //// SCREENADDING HTE NEW CANDIDATE

export const Individual = ({ route, navigation, item }) => (
  <ScreenContainer>
    {console.log(route.params['experience'])}
    <Text>fdfdfdfdfd{item}</Text>
    <Text>Details Scresssssssssssssssssen</Text>
  </ScreenContainer>
);



// expandable section

const ExpandableComponenet = ({ item, onClickFunction, navigation }) => {

  const [layout, setlayout] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setlayout(null)
    } else {
      setlayout(0);
    }
  }, [item.isExpanded])

  return (
    <View>
      <TouchableOpacity
        style={styles.item}
        onPress={onClickFunction}>
        <Text style={styles.itemText}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
      {console.log(item)}
      <View style={{
        height: layout,
        overflow: 'hidden'
      }}>
        {
          item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              style={styles.content}
              onPress={() =>
                navigation.navigate("Details", item)
              }
            >
              <View style={styles.subsections}>
                <Image style={styles.subimage} source={item.image} />
                {console.log(item.image)}
                <View style={styles.callEmail}>
                  <Text style={styles.text}>
                    {item.val}
                  </Text>
                  <TouchableOpacity
                    style={styles.customButton1}
                    onPress={() => { }}  >
                    <Text style={styles.customBtnText}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.customButton2}
                    onPress={() => { }}  >
                    <Text style={styles.customBtnText}>Email</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))
        }
      </View>
    </View >
  )
}


function Candidates({ navigation }) {
  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const [multiSelect, setmultiSelect] = useState(false);
  const [listdata, setlistdata] = useState(CONTENT);

  const updateLayout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...listdata];

    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
          : (array[placeindex]['isExpanded']) = false
      );
    }
    setlistdata(array)
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>
            Job Candidates
          </Text>
        </View>

        <ScrollView>
          {
            listdata.map((item, key) => (
              <ExpandableComponenet
                key={item.category_name}
                item={item}
                onClickFunction={() => {
                  updateLayout(key)
                }}
                navigation={navigation}
              />
            ))
          }
        </ScrollView>

      </View>

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
    padding: 20,
    textAlign: 'left',



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
  }

});


export default Candidates;
