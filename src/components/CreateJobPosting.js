import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Button } from 'react-native';

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

  }

  return (
    <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 6 }} enableKeyboardOffset={350}>

      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

        <View style={styles.formContainer}>


          {/* ------------------------Job Title-------------------------- */}
          <Text style={styles.label}>Position</Text>

          <TextInput
            style={styles.title}
            returnKeyType="next"
            multiline numberOfLines={20}
            value={title}
            onChangeText={(desc) => setTitle(desc)}
          />

          {/* ------------------------Job Title-------------------------- */}

          {/* ------------------------Industry-------------------------- */}

          <Text style={styles.label}>Industry</Text>

          <TextInput
            style={styles.industry}
            returnKeyType="next"
            multiline numberOfLines={20}
            value={industry}
            onChangeText={(desc) => setIndustry(desc)}
          />

          {/* ------------------------Industry-------------------------- */}

          {/* ------------------------Description-------------------------- */}
          <Text style={styles.label}>Job Description</Text>

          <Text style={{ fontSize: 13 }}>
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
          <Text style={styles.label}>Phone Number</Text>

          <Text style={{ fontSize: 13 }}>
            (call us)

          </Text>

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

          <Button title="Create Posting" onPress={submit} />

          {/* --------------------- End Submit Button ----------------------- */}
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// styles
const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    marginTop: 50,
  },
  label: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  description: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: "#f9f7f6",
    height: 150,
    fontSize: 22,
    borderColor: "#ccc",
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 25,
  },
  phone: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: "#f9f7f6",
    fontSize: 22,
    borderColor: "#ccc",
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 25,
  },
  title: {
    height: 45,
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: "#f9f7f6",
    fontSize: 22,
    borderColor: "#ccc",
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 25,
  },
  industry: {
    height: 45,
    paddingHorizontal: 2,
    paddingVertical: 5,
    backgroundColor: "#f9f7f6",
    fontSize: 22,
    borderColor: "#ccc",
    borderWidth: 2,
    marginVertical: 5,
    marginTop: 25,
  },
})

export default CreateJobPostingScreen;