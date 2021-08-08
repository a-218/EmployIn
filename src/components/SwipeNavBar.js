import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'

import axios from 'axios'
import Swipes from './Swipes'
import useApplicationData from '../hooks/useApplicationData'



import { JobContext } from '../contexts/JobProvider'
import BottomBar from './Bottombar'
export default function SWipeNavBar() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const { applicantDBState } = useApplicationData()

  const data = applicantDBState
  //console.log('outside use application data', data)
  const swipesRef = useRef(null)
  //  const { applicantLinksDBState } = useApplicationData()
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


  const job = useContext(JobContext);


  function handleLike() {

    console.log('like')

    const newState = [...job.Applicant, data[currentIndex]]

    job.setApplicant(newState)

    nextUser()
  }

  // useEffect(() => {
  //   setCandidatesState(candidates)

  // }, [candidates])


  function handlePass() {
    console.log('pass')

    nextUser()
  }

  function nextUser() {
    const nextIndex = data.length - 1 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)

  }

  function handleLikePress() {
    console.log('2')
    swipesRef.current.openLeft()

  }
  function handlePassPress() {
    swipesRef.current.openRight()
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
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  data={data}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
          )}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
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