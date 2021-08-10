
import React, { useState } from 'react';

// const FoodContext = React.createContext();
const PostingContext = React.createContext();
const PostingProvider = (props) => {

  ///first 3 posting setted the same with joB POSTINGSCREEn.js
  const [Posting, setPosting] = React.useState([
    {
      description: "234",
      id: 1,
      industry: 'Tech/Web development',
      title: 'Full Stack Developer',
    },
    {
      description: "234",
      id: 2,
      industry: 'Tech/Web development',
      title: 'Junior Stack Developer',
    },
    {
      description: "234",
      id: 3,
      industry: 'Tech/Web development',
      title: 'Back End Developer',
    },
  ])
  return (
    <PostingContext.Provider
      value={{ Posting, setPosting }}
    >
      {props.children}
    </PostingContext.Provider>
  )
}

export { PostingProvider, PostingContext };