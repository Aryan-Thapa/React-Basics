import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOne from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObje={
    name:'Aryan',
    age:21
  }
  let newArr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Taiwind CSS</h1>
    <CardOne username="Natasha" />
    <CardOne username="Sasha" btntext="click me"/>
    </>
  )
}

export default App
