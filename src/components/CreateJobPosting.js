import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Button } from 'react-native';
import { moderateScale } from "react-native-size-matters";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Create Component

const CreateJobPostingScreen = ({ navigation }) => {

  const [title, setTitle] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');


  const data = useCallback(() => {
    const jobData = {
      title: title,
      industry: industry,
      description: description,
      phone: phone,
    }
    console.log("Post job:", jobData)
  }, [title, industry, description, phone])

  const submit = async () => {
    await data();
    navigation.navigate({
      name: "Job Posting",
      params: { title: title, industry: industry, description: description, phone: phone }
    })
    setTitle("");
    setIndustry("");
    setDescription("");
    setPhone("");

  }

  return (
    <KeyboardAvoidingView style={{ flex: 1}} enableKeyboardOffset={350}>

      <ScrollView contentContainerStyle={{ alignItems: 'center' , backgroundColor: "#2d3047"}}>

        <View style={styles.formContainer}>


          {/* ------------------------Job Title-------------------------- */}
          <View style={styles.title}>
            <FontAwesome name="briefcase" style={styles.icon}>
            </FontAwesome>
            <Text style={styles.label}>Position</Text>
          </View>

          <TextInput
            style={styles.position}
            returnKeyType="next"
            multiline numberOfLines={20}
            value={title}
            onChangeText={(desc) => setTitle(desc)}
          />

          {/* ------------------------Job Title-------------------------- */}

          {/* ------------------------Industry-------------------------- */}
          <View style={styles.title}>
            <FontAwesome name="industry" style={styles.icon}>
            </FontAwesome>
            <Text style={styles.label}>Industry</Text>
          </View>

          <TextInput
            style={styles.industry}
            returnKeyType="next"
            multiline numberOfLines={20}
            value={industry}
            onChangeText={(desc) => setIndustry(desc)}
          />

          {/* ------------------------Industry-------------------------- */}

          {/* ------------------------Description-------------------------- */}
          <View style={styles.title}>
            <FontAwesome name="clipboard" style={styles.icon}>
            </FontAwesome>
            <Text style={styles.label}>Job Description</Text>
          </View>

          <Text style={{ fontSize: 13, alignSelf: 'center', color: 'tomato'}}>
            (also include salary, time and address)
          </Text>

          <TextInput
            style={styles.description}
            returnKeyType="next"
            multiline numberOfLines={20}
            value={description}
            onChangeText={(desc) => setDescription(desc)}
          />
          {/* ------------------------ END Description --------------------- */}

          {/* ------------------------Phone Number-------------------------- */}
          <View style={styles.title}>
            <FontAwesome name="phone" style={styles.icon}>
            </FontAwesome>
            <Text style={styles.label}>Phone Number</Text>
          </View>

          <TextInput
            style={styles.phone}
            returnKeyType="next"
            keyboardType={'phone-pad'}
            value={phone}
            onChangeText={(desc) => setPhone(desc)
            }
          />
          {/* ----------------------- End Phone Number ---------------------- */}

          {/* ------------------------Submit Button-------------------------- */}

          <Button color="#e3655b" title="Create Posting" onPress={submit} />

          {/* --------------------- End Submit Button ----------------------- */}
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// styles

const textareas = {
  backgroundColor: "#f5f5f5",
  borderColor: "#ccc",
  borderWidth: moderateScale(2),
  borderRadius: moderateScale(20),
  fontSize: 22,
  marginBottom: moderateScale(35),
  marginLeft: moderateScale(20),
  marginRight: moderateScale(20),
  zIndex: 999,
}

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginTop: moderateScale(20),
  },
  label: {
    fontSize: 20,
    color: 'tomato',
    alignSelf: 'center',
  },
  icon: {
    fontSize: 20,
    textAlign: "center",
    marginTop: moderateScale(3),
    marginRight: moderateScale(10),
  },
  title: {
    flexDirection: "row",
    alignSelf: "center",
  },
  position: {
    ...textareas,
    height: moderateScale(45),
  },
  industry: {
    ...textareas,
    height: moderateScale(45),
  },
  description: {
    ...textareas,
    height: moderateScale(150),
  },
  phone: {
    ...textareas,
    height: moderateScale(45),
    marginBottom: moderateScale(42),
  },
  
})

export default CreateJobPostingScreen;