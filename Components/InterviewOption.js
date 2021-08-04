import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Button, ScrollView, TextComponent, LayoutAnimation, Platform, UIManager } from 'react-native';

function InterviewOption({ navigation, props }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Interviews</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  }


})


export default InterviewOption;