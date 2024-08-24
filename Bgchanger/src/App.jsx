import { useState } from 'react'

function App() {
  let [color,setColor]=useState("Olive")
  return (
    <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-28 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 bg-white px-4 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Red")}
          className='outline-none rounded-full text-white bg-red-800 px-4 py-1' >Red</button>

          <button onClick={()=>setColor("Blue")}
          className='outline-none rounded-full text-white bg-blue-800 px-4 py-1' >Blue</button>

          <button onClick={()=>setColor("Green")}
          className='outline-none rounded-full text-white bg-green-800 px-4 py-1' >Green</button>

          <button onClick={()=>setColor("Yellow")}
          className='outline-none rounded-full text-white bg-yellow-800 px-4 py-1' >Yellow</button>

          <button onClick={()=>setColor("Orange")}
          className='outline-none rounded-full text-white bg-orange-800 px-4 py-1' >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
