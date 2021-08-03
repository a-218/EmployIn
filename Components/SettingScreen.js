import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';

// import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
// import { ListItem, Avatar } from 'react-native-elements/dist/list/ListItem';


const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Job Position 1',
    subcategory: [
      { id: 1, val: 'NAME', image: require("../assets/Joey.jpeg") },
      { id: 2, val: 'FIRSTNAME sssssssssssssssss', image: require("../assets/Joey.jpeg") }
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


// expandable section

const ExpandableComponenet = ({ item, onClickFunction }) => {

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

      <View style={{
        height: layout,
        overflow: 'hidden'
      }}>
        {
          item.subcategory.map((item, key) => (
            <TouchableOpacity
              key={key}
              sytle={styles.content}>
              <View style={styles.subsections}>
                <Image style={styles.subimage} source={item.image} />
                <Text style={styles.text}>
                  {item.val}
                </Text>

              </View>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}


function SettingsScreen() {
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
                }} />
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500'
  },

  text: {
    fontSize: 16,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,

  },
  separator: {
    height: 0.9,
    backgroundColor: 'black',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    width: '90%'
  },
  content: {
    flexDirection: 'row'
  },
  subimage: {

    width: 100,
    height: 100,
    borderRadius: 40,

  },
  subsections: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }


});

export default SettingsScreen;