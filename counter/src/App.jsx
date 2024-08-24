import './App.css'
import { useState } from 'react'
function App() {
let [counter,setCounter]=useState(0)
  const addValue=()=>{
    if(counter==20){
      setCounter(counter=20)
    }
    else setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else setCounter(counter=0)
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add Value</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
