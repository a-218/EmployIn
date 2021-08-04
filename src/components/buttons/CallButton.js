import React from "react";
import { StyleSheet, Button, View } from "react-native";
import call from "react-native-phone-call";

// Please refer to documentation for further understanding: https://www.npmjs.com/package/react-native-phone-call

export default function CallButton() {
  // Dummy variables for testing
  const dummyNumber = {
    number: "1234567890", // Dummy phone number, we will pass props into here
    prompt: false, // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  function handlePhoneCall() {
    call(dummyNumber).catch(console.error);
  }

  return (
    <View style={styles.container}>
      <Button title="Call" onPress={handlePhoneCall} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
