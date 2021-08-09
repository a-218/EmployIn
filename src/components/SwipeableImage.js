import React from 'react'
import { View, Image, StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from "react-native-size-matters";

export function SearchScreen({ user }) {

  return (
    <SafeAreaView>

      <View style={styles.container}>
        <ImageBackground source={{uri: "data:image/jpeg;base64,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" }}style={styles.bg}>
          
          <View style={styles.identity}>

            <Image source={{ uri: user.img_url }} style={styles.image} />
            
            <View style={styles.personalinfo}>
              <Text style={styles.name}>{user.name}</Text>
                <View style={styles.info}>
                  <FontAwesome style={styles.phoneicon} name="phone" size={18} color="black">
                    :
                  </FontAwesome>
                  <Text style={styles.phone, {color: "#605770"}}>
                    {user.phone_number}
                  </Text>
                </View>

                <View style={styles.info}>
                  <FontAwesome style={styles.envelopeicon} name="envelope" size={17} color="black">
                    :
                  </FontAwesome>
                  <Text style={styles.email, {color: "#605770"}}>
                    {user.email}
                  </Text>
                </View>
            </View>

          </View>
        </ImageBackground>

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
  borderRadius: moderateScale(15),
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
  bg:{
    width: "100%",
    borderRadius: moderateScale(20),
  },
  
  container: {
    height: '100%',
    backgroundColor: "#f5f5f5",
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(2),
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
  info: {
    flexDirection: "row",

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
    width: 225
  },
  phone: {
    fontSize: 18,
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
  phoneicon: {
    marginLeft: moderateScale(2),
    marginRight: moderateScale(4)
  },
  envelopeicon: {
    marginRight: moderateScale(5)
  }
})
