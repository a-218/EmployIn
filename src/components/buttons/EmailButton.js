import React from "react";
import { StyleSheet, Button, View } from "react-native";
import email from "react-native-email";

// Please refer to the documentations on the commented variables: https://www.npmjs.com/package/react-native-email

export default function EmailButton() {
  function handleEmail() {
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

  return (
    <View style={styles.container}>
      <Button title="Send E-Mail" onPress={handleEmail} />
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
