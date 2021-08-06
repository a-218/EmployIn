import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'

import axios from 'axios'

import Swipes from './Swipes'

export default function SWipeNavBar() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const data = [
    {
      name: 'chandler',
      phonenumber: '1234',
      email: 'abc@gmail.com',
      skills: 'whatever',
      summary: 'work in acting',
      experience: 'sdfjdsfdsjfdsjfdsfdsfdsfdsfds',
      externallinks: 'https://github.com'
    },

    {
      name: 'James',
      phonenumber: '1234567',
      email: '123@gmail.com',
      skills: 'whatever2',
      summary: 'work in cooking',
      experience: 'sdfjdsfdsjfdsjfdsfdsfdsfdsfds',
      externallinks: 'https://github.com'
    },

    {
      name: 'Robert',
      phonenumber: '5555554',
      email: 'youyoyouuo@gmail.com',
      skills: 'good at omthin',
      summary: 'looking fiir jobs ',
      experience: 'sdfjdsfdsjfdsjfdsfdsfdsfdsfds',
      externallinks: 'https://github.com'
    },

    {
      name: 'Jasmine',
      phonenumber: '777777',
      email: 'helloworld@gmail.com',
      skills: 'whatever, dancing',
      summary: 'dancer',
      experience: 'sdfjdsfdsjfdsjfdsfdsfdsfdsfds',
      externallinks: 'https://twitter.com'
    },

    {
      name: 'David',
      phonenumber: '1234',
      email: 'David@gmail.com',
      skills: 'waving to people',
      summary: 'I need a job in airplanes',
      experience: 'sdfjdsfdsjfdsjfdsfdsfdsfdsfds',
      externallinks: 'https://twitter.com'
    },

    {
      name: 'Courtney',
      phonenumber: '85858585',
      email: 'goodbye@gmail.com',
      skills: 'guitar',
      summary: 'work in acting',
      experience: 'awdawdawdadawdawdawdawd',
      externallinks: 'https://github.com'
    },

    {
      name: 'XXXX',
      phonenumber: '85858585',
      email: 'goodbye@gmail.com',
      skills: 'guitar',
      summary: 'work in acting',
      experience: 'awdawdawdadawdawdawdawd',
      externallinks: 'https://github.com'
    },

  ]

  // async function fetchUsers() {
  //   try {
  //     const { data } = await axios.get('https://randomuser.me/api/?gender=female&results=50')
  //     setUsers(data.results)
  //   } catch (error) {
  //     console.log(error)
  //     Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }])
  //   }
  // }

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  useEffect(() => {
    setUsers(data)
  }, [])

  const [candidatesState, setCandidatesState] = useState([])

  function handleLike() {

    console.log('like')

    const candidates = [candidatesState]

    setCandidatesState((prev) => [...prev, data[currentIndex]])

    // console.log("candidates:", candidates)
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = data.length - 1 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }


  return (
    <View style={styles.container}>
      <View style={styles.swipes}>
        {data.length > 1 &&
          data.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  currentIndex={currentIndex}
                  data={data}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
})