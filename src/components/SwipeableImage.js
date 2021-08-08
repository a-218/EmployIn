import React from 'react'
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from "react-native-size-matters";

export function SearchScreen({ user }) {

  return (
    <SafeAreaView>

      <View style={styles.container}>
        <View style={styles.identity}>

          <Image source={{ uri: user.img_url }} style={styles.image} />

          <View style={styles.personalinfo}>
            <Text style={styles.name}>{user.name}</Text>
            {/* <Text style={styles.phone}>{user.phone_number}</Text> */}
            
                <Text>
                  <Icon name="phone" size={18} color="black">
                    :
                  </Icon>
                  <Text style={styles.phone, {color: "#605770"}}>
                    {user.phone_number}
                  </Text>
                </Text>

                <Text>
                  <Icon style={styles.icon} name="envelope" size={18} color="black">
                    :
                  </Icon>
                  <Text style={styles.email, {color:"#605770"}} >
                    {user.email}
                  </Text>
                </Text>
          </View>

        </View>

        {/* Other parts of resume like summary */}
        <View style={styles.resumecontent}>

          <View style={styles.skills}>
              <Text style={{color: "#605770", fontSize: 18}}>
                Skills: 
              </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{color: "black"}}>
              {user.skills}
            </Text>
          </View>

          <View style={styles.summary}>
              <Text style={{color: "#605770", fontSize: 18}}>
                Summary: 
              </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{color: "black"}}>
              {user.summary}
            </Text>
          </View>

          <View style={styles.experience}>
              <Text style={{color: "#605770", fontSize: 18}}>
                Experience:
              </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{color: "black"}}>
              {user.experience}
            </Text>
          </View>

          <View style={styles.links}>
              <Text style={{color: "#605770", fontSize: 18}}>
                Links:
              </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{color: "black"}}>
              {user.externallinks}
            </Text>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

export default function SwipeableImage({ user, willLike, willPass }) {

  return (
    <View>

      {willLike && (
        <View style={styles.likeBox}>
          <Text style={{ ...styles.textPrimary, color: 'black', fontSize: 20 }}>SAVE</Text>
        </View>
      )}
      {willPass && (
        <View style={styles.passBox}>
          <Text style={{ ...styles.textPrimary, color: 'black', fontSize: 20 }}>PASS</Text>
        </View>
      )}

      <SearchScreen user={user} />

    </View>

  )
}

const boxStyle = {
  position: 'absolute',
  top: '45%',
  padding: moderateScale(20),
  borderWidth: moderateScale(1),
  borderRadius: moderateScale(10),
}

const resumeSections = {
  backgroundColor: "#f5f5f5",
  borderWidth: moderateScale(2),
  padding: moderateScale(5),
  borderRadius: moderateScale(10),
  marginBottom: moderateScale(15),
}

const styles = StyleSheet.create({

  likeBox: {
    ...boxStyle,
    left: moderateScale(20),
    backgroundColor: '#9BC1BC',
    zIndex: 999,
  },
  passBox: {
    ...boxStyle,
    right: moderateScale(20),
    borderColor: '#F06795',
    backgroundColor: '#ED6A5A',
    zIndex: 999,
  },

  
  container: {
    height: '100%',
    backgroundColor: "#f5f5f5",
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(4),
    shadowOpacity: 1,
    shadowColor: "tomato",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  
  personalinfo: {
    alignItems: 'flex-start',
  },
  image: {
    width: moderateScale(85),
    height: moderateScale(85),
    borderRadius: moderateScale(20),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: moderateScale(5),
  },
  phone: {
    fontSize: 188,
    marginBottom: moderateScale(5),
  },
  email: {
    fontSize: 18,
    marginBottom: moderateScale(5),
  },

  
  identity: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: (5),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(10),
  },
  resumecontent: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
  },

  skills: {
    ...resumeSections,
  },
  summary: {
    ...resumeSections,
  },
  experience: {
    ...resumeSections,
  },
  links: {
    ...resumeSections,
  },
  icon:{
  }

})
