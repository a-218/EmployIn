
import React, { useState } from 'react';

// const FoodContext = React.createContext();
const JobContext = React.createContext();
const JobProvider = (props) => {

  // const [name, setName] = useState('Tacos');
  // const [calories, setCalories] = useState('80');

  // const [Applicant, setApplicant] = React.useState([{
  //   email: 'something@www.come',
  //   experience: '',
  //   id: '2',
  //   img_url: 'https://images-ext-1.discordapp.net/external/XOu0taAiJyXF4cHf_Nd-EmDVqneZM4b4JbzFRQ9oYww/https/randomuser.me/api/portraits/men/30.jpg',
  //   name: 'javk',
  //   phone_number: '123-234-3333',
  //   summary: 'eserunt meditation DIY, ut m'
  // }])

  const [Applicant, setApplicant] = React.useState([{
    email: '',
    experience: '',
    id: '',
    img_url: '',
    name: '',
    phone_number: '',
    summary: ''
  }])
  return (
    <JobContext.Provider
      value={{
        Applicant,
        setApplicant
      }}
    >
      {props.children}
    </JobContext.Provider>
  )
}

export { JobProvider, JobContext };