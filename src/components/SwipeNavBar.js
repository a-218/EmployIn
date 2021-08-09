import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, View, Alert } from 'react-native'
import Constants from 'expo-constants'

import axios from 'axios'
import Swipes from './Swipes'
import useApplicationData from '../hooks/useApplicationData'



import { JobContext } from '../contexts/JobProvider'
import BottomBar from './Bottombar'
export default function SWipeNavBar({ route }) {
  console.log('postID is this', route.params)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { applicantDBState } = useApplicationData()

  let data = applicantDBState
  console.log('RESETS ')
  // const newArr = data.map(applicant => {
  //   return { ...applicant, jobPostingID: String((Math.floor(Math.random() * 3)) + 1) }
  // });
  //NEED to mdodify newARR into 4 sections with hardcoded jobPOsting ID
  // const newArr = data.map((applicant,i) => {
  //   return { ...applicant, jobPostingID: String((Math.floor(Math.random() * 3)) + 1) }
  // });
  const newArr = data.map((applicant, i) => {
    if (i < 5) {
      return { ...applicant, jobPostingID: String(1) }
    } else if (i < 10) {
      return { ...applicant, jobPostingID: String(2) }
    } else if (i < 15) {
      return { ...applicant, jobPostingID: String(3) }
    } else if (i < 20) {
      return { ...applicant, jobPostingID: String(4) }
    }

  });


  // const newArr = [...data]

  console.log('BEBEBEBEBEBEBBEBEBE the for loop', newArr)

  // for (let i = 0; i < data.length; i++) {
  //   if (i < 6) {
  //     newArr[i] = { jobPostingID: '1' }
  //   } else if (i < 12) {
  //     newArr[i] = { jobPostingID: '2' }
  //   } else if (i < 18) {
  //     newArr[i] = { jobPostingID: '3' }
  //   } else if (i < 24) {
  //     newArr[i] = { jobPostingID: '4' }
  //   } else {
  //     newArr[i] = { jobPostingID: '5' }
  //   }
  // }
  // console.log('AFFAFAFAFAFAFFAF the for loop', newArr)

  let filteredApplicant = newArr.filter(function (currentElement) {
    // the current value is an object, so you can check on its properties
    return currentElement.jobPostingID === String(route.params.itemId);
  });



  // console.log('AFTER FFILTERING ', filteredApplicant)


  // data = newArr;
  data = filteredApplicant;
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
  ////need to add in job posting id here?

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