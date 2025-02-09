import logo from './logo.svg';
import './App.css';
import Instructions from './components/Instructions'
import Comments from './components/Comments'
import React, { useState, useEffect } from 'react'



function App() {

  const [ comment, setComment] = useState({}) //the sate for each comment recieved from jsonplaceholder
  const [ singleComment, setSingleComment] = useState(null)  //wasnt sure if i needed this. 
  
  useEffect(() => {

    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments')
      const data = await response.json()
      setComment(data)
    }
    getData()

  }, [])
  
  return (
    <div className="container">
      <Instructions />
      <Comments  comment={comment}/> 
    </div>
  );
}

export default App;
