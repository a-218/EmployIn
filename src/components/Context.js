
import React, { useState } from 'react'


const ApplicantContext = React.createContext();


function ApplicantProvider({ children }) {

  const [Applicant, setApplicant] = React.useState([{
    email: 'something@www.come',
    experience: '',
    id: '2',
    img_url: 'http',
    name: 'javk',
    phone_number: '123-234-3333',
    summary: 'eserunt meditation DIY, ut m'
  }])

  // let Applicant = [{
  //   email: 'something@www.come',
  //   experience: '',
  //   id: '2',
  //   img_url: 'http',
  //   name: 'javk',
  //   phone_number: '123-234-3333',
  //   summary: 'eserunt meditation DIY, ut m'
  // }];

  // function setApplicant(newVal){
  //   Applicant.push(newVal)
  // }

  const value = { Applicant, setApplicant }

  return (
    <ApplicantContext.Provider value={value}>
      {children}
    </ApplicantContext.Provider>
  )
};


function useApplicant() {
  const context = React.useContext(ApplicantContext)
  if (context === undefined) {
    throw new Error('it is undefiend here ')
  }

  return context
};

export { ApplicantProvider, useApplicant }