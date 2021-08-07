import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'

import axios from 'axios'
import Swipes from './Swipes'
import useApplicationData from '../hooks/useApplicationData'

//import { ApplicantProvider, useApplicant } from './Context'

import { JobContext } from './JobProvider'
import BottomBar from './Bottombar'
export default function SWipeNavBar() {
  const [users, setUsers] = useState([])
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

  const [candidatesState, setCandidatesState] = useState([])
  const job = useContext(JobContext);
  const candidates = candidatesState

  useEffect(() => {


    setUsers(candidates)
  }, [])




  function handleLike() {

    // const applicant = useApplicant();
    // console.log(applicant)
    // console.log('data inside handle lieke$$$$$$$$$$$$', data)
    console.log('data inside handle lieke$$$$$$$$$$$$', currentIndex)
    console.log('like')
    console.log('1')

    // setApplicant(candidates)
    console.log('dddddhdhdhdhdhhdhdhhdd', data[0])
    nextUser()
    // const candidates = candidatesState

    setCandidatesState((prev) => [...prev, data[currentIndex]])

    console.log('sdsdsdsdsdsdsdsdsdsdsdsd', candidates, 'and the current index')

    job.setApplicant(candidates)
    console.log('the contextttttttttt', job)
  }

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