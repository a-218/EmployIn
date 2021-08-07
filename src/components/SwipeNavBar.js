import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'

import axios from 'axios'
import Swipes from './Swipes'
import useApplicationData from '../hooks/useApplicationData'

//import { ApplicantProvider, useApplicant } from './Context'

import { JobContext } from './JobProvider'

export default function SWipeNavBar() {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const { applicantDBState } = useApplicationData()
  //  console.log(applicantDBState)
  const data = applicantDBState


  const { applicantLinksDBState } = useApplicationData()
  //console.log(applicantLinksDBState)

  //console.log('the data over herer', data)


  // function fetchUsers() {
  //   try {
  //     const { applicantDBState } = useApplicationData()
  //     console.log(applicantDBState)
  //     const { data } = applicantDBState
  //     // setUsers(data.results)
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
  const job = useContext(JobContext);



  function handleLike() {
    // const applicant = useApplicant();
    // console.log(applicant)

    console.log('like')

    const candidates = candidatesState

    setCandidatesState((prev) => [...prev, data[currentIndex]])
    // setApplicant(candidates)


    // console.log("candidates:", candidates)

    nextUser()
    job.setApplicant(candidates)

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