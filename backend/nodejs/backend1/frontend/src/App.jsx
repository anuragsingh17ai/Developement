import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
 const [jokes,setJokes]=useState([]);
 
 useEffect(()=>{
  axios.get('/api/joke')
  .then((res)=>{
    setJokes(res.data)
 }).catch((error)=>{
  console.log(error)
 })
})

  return (
    <>
      <h1> Chai and full jokes</h1>
      <p> JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index)=>{
          return(
          <div key={joke.id}>
            <h3>{joke.joke}</h3>
          </div>
          )
        })
      }
    </>
  )
}

export default App
