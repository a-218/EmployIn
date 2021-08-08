
import React, { useState } from 'react';

// const FoodContext = React.createContext();
const JobContext = React.createContext();
const JobProvider = (props) => {


  const [Applicant, setApplicant] = React.useState([])
  return (
    <JobContext.Provider
      value={{ Applicant, setApplicant }}
    >
      {props.children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext };