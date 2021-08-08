
import React, { useState } from 'react';

// const FoodContext = React.createContext();
const PostingContext = React.createContext();
const PostingProvider = (props) => {


  const [Posting, setPosting] = React.useState([])
  return (
    <PostingContext.Provider
      value={{ Posting, setPosting }}
    >
      {props.children}
    </PostingContext.Provider>
  )
}

export { PostingProvider, PostingContext };