
import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import call from "react-native-phone-call";
import email from "react-native-email";
import { JobContext } from '../contexts/JobProvider'
//import styles from '../styles/ScreensStyle';
import { PostingContext } from '../contexts/PostingProvider';
import applicant from '../hooks/getDB/applicant';

// import styles from '../styles/ScreensStyle';
const CONTENT = [
  {
    isExpanded: false,
    category_name: "Job Position 1",
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: "Job Position 2",
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: 'Job Position 3',
    subcategory: [

    ]
  },

]



const ScreenContainer = ({ children }) => (
  <View>{children}</View>
);



// ---------------------------------------View Resume on Click---------------------------------------------------- //

export const Individual = ({ route, navigation, item }) => (
  <ScrollView >
    <ScreenContainer >
      <View style={styles.resumecontainer}>

        <View style={styles.identity}>
          {/* {console.log(route.params.img_url)} */}
          < Image source={{ uri: route.params.img_url }} style={styles.image} />

          <View style={styles.personalinfo}>
            <Text style={styles.name}>{route.params.name}</Text>
            <View style={styles.info}>
              <FontAwesome style={styles.phoneicon} name="phone" size={18} color="black">
                :
              </FontAwesome>
              <Text style={styles.phone, { color: "#605770" }}>
                {route.params.phone_number}
              </Text>
            </View>

            <View style={styles.info}>
              <FontAwesome style={styles.envelopeicon} name="envelope" size={17} color="black">
                :
              </FontAwesome>
              <Text style={styles.email, { color: "#605770" }}>
                {route.params.email}
              </Text>
            </View>
          </View>
        </View>

        {/* Other parts of resume like summary */}
        <View style={styles.resumecontent}>

          <View style={styles.skills}>
            <Text style={{ color: "#605770", fontSize: 18 }}>
              Skills:
            </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{ color: "black" }}>
              {route.params.skills}
            </Text>
          </View>

          <View style={styles.summary}>
            <Text style={{ color: "#605770", fontSize: 18 }} numberOfLines={4} ellipsizeMode='tail'>
              Summary:
            </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{ color: "black" }}>
              {route.params.summary}
            </Text>
          </View>

          <View style={styles.experience}>
            <Text style={{ color: "#605770", fontSize: 18 }}>
              Experience:
            </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{ color: "black" }}>
              {route.params.experience}
            </Text>
          </View>

          <View style={styles.links}>
            <Text style={{ color: "#605770", fontSize: 18 }}>
              Links:
            </Text>
            <Text numberOfLines={4} ellipsizeMode='tail' style={{ color: "black" }}>
              {route.params.externallinks}
            </Text>
          </View>
        </View>


      </View>

    </ScreenContainer>
  </ScrollView>
);



// // --------------------------------------- Expanded View --------------------------------------------------- //

const ExpandableComponenet = ({ item, onClickFunction, navigation, isExpanded, applicants }) => {
  ///adding caling function from call button
  const dummyNumber = {
    number: "1234567890", // Dummy phone number, we will pass props into here
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  function handlePhoneCall() {
    //console.log('it got in here into handlephone call')
    console.log("it got in here into handlephone call");
    call(dummyNumber).catch(console.error);
  }
  ///////////////////EMAIL BUTTON
  function handleEmail() {
    //console.log('it got in here into EMAIL MESSAGING ')
    console.log("it got in here into EMAIL MESSAGING ");
    // This is a dummy variable, we will eventually pass props into here
    const to = ["jzlowie@gmail.com"]; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ["jzlowie@gmail.com", "jzlowie@yahoo.com"], // string or array of email addresses
      // bcc: "jzlowie@yahoo.com", // string or array of email addresses
      subject: "Show how to use",
      body: "Some body right here",
    }).catch(console.error);
  }

  ///////


  const [layout, setlayout] = useState(isExpanded);

  useEffect(() => {
    setlayout()
  }, [isExpanded])


  return (
    <View>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={onClickFunction}>
        <Text style={styles.jobtitle}>
          {item.title}
          {/* 
        <Text style={styles.jobtitle}>
          {item.category_name} */}
        </Text>
      </TouchableOpacity>
      {isExpanded &&
        <View>
          {/* // style={{ */}
          {/* //   height: layout,
          //   overflow: 'hidden' */}

          {
            // applicants .map((item,keyy))
            applicants.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.content}
                onPress={() =>
                  navigation.navigate("Individual", item)
                }
              >
                <View style={styles.subsections}>

                  <View style={styles.imgName}>
                    <Image source={{ uri: item.img_url }} style={styles.subimage} />

                    <Text style={styles.candidateName}>
                      {item.name}
                    </Text>
                  </View>

                  <View style={styles.buttons}>

                    <TouchableOpacity
                      style={styles.callButton}
                      onPress={() => handlePhoneCall()}  >
                      <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.emailButton}
                      onPress={() => handleEmail()}  >
                      <Text style={styles.buttonText}>Email</Text>
                    </TouchableOpacity>

                  </View>
                </View>

                <View style={styles.candidateSeparator} />

              </TouchableOpacity>
            ))
          }
        </View>
      }
    </View >

    // -------------------------------------------Job Candidates Page View-------------------------------------------------- //

  )
}
function Candidates({ navigation }) {
  if (Platform.OS === "android") {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const job = useContext(JobContext);

  // const [multiSelect, setmultiSelect] = useState(false);

  const jobPost = useContext(PostingContext)

  console.log('sdfsdfsdfdsfsdfdsf', job.Applicant)

  const [expanded, setexpanded] = useState(new Array(jobPost.Posting.length).fill(false))

  console.log('sdfsdfsdfdsfsdfdsf', expanded)

  const [listdata, setlistdata] = useState(job.Applicant);

  //const [multiSelect, setmultiSelect] = useState(expanded);
  const updateLayout = (index) => {

    const expandedTmp = expanded
    expandedTmp[index] = !expandedTmp[index]
    console.log('ssssssssss', expandedTmp)
    setexpanded(expandedTmp)

    console.log('IN THE UPDATA LAYOUT', expanded)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...listdata];


    setlistdata(array)

  }



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Job Candidates
          </Text>

        </View>

        <ScrollView>
          {
            jobPost.Posting.map((item, key) => {

              const jobApplicants = job.Applicant.filter((person) => {

                return person.jobPostingID == jobPost.Posting[key].id
              })

              console.log('nnnnnnnnnnn', expanded[key])
              console.log('kkkkd', key)
              return (

                <ExpandableComponenet
                  key={item.title}
                  isExpanded={expanded[key]}
                  item={item}
                  onClickFunction={() => {

                    updateLayout(key)
                  }}
                  applicants={jobApplicants}
                  navigation={navigation}
                />)
            }
            )}
        </ScrollView>
      </View>
    </SafeAreaView >

  );
}
// -------------------------------------------------- Styles ----------------------------------------------------------- //

const resumeSections = {
  backgroundColor: "#f5f5f5",
  borderWidth: moderateScale(2),
  padding: moderateScale(5),
  borderRadius: moderateScale(15),
  marginBottom: moderateScale(15),
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  headerText: {
    flex: 1,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
    marginTop: moderateScale(30),
    textAlign: 'center',
  },
  dropdown: {
    backgroundColor: 'orange',
    borderRadius: moderateScale(10),
    marginBottom: moderateVerticalScale(20),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    padding: moderateScale(20),
  },
  jobtitle: {
    fontSize: moderateScale(16),
    fontWeight: '500'
  },
  subsections: {
    flexDirection: 'row',
  },
  imgName: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  subimage: {
    borderRadius: moderateScale(40),
    height: moderateScale(60),
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
    width: moderateScale(60),
  },
  candidateName: {
    flexWrap: 'wrap',
    fontSize: moderateScale(16),
    marginTop: moderateScale(25),
    marginLeft: moderateScale(5),
    width: moderateScale(100),
  },
  buttons: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  callButton: {
    backgroundColor: "#5DA9E9",
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(5),
  },
  emailButton: {
    backgroundColor: "#5DA9E9",
    borderRadius: moderateScale(30),
    marginLeft: 5,
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(5),
  },
  candidateSeparator: {
    backgroundColor: 'lightgrey',
    height: 2,
    marginBottom: moderateVerticalScale(5),
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    marginTop: moderateVerticalScale(5),
    width: '88%'
  },
  individual: {
    alignItems: 'flex-start',
  },




  resumecontainer: {
    flex: 1,
    marginTop: moderateScale(5),
    marginRight: moderateScale(5),
    marginLeft: moderateScale(5),
    height: '100%',
    backgroundColor: "#f5f5f5",
    borderRadius: moderateScale(20),
    borderWidth: moderateScale(1),
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
  },
  phone: {
    fontSize: 18,
    marginBottom: moderateScale(5),
  },
  email: {
    fontSize: 18,
    marginBottom: moderateScale(5),
  },
  phoneicon: {
    marginLeft: moderateScale(2),
    marginRight: moderateScale(4)
  },
  envelopeicon: {
    marginRight: moderateScale(5)
  },

  identity: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
export default Candidates;
