import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // let countValue=0;

  // using hook
  
  let [countValue,setCounter]= useState(0); 

  const addValue=()=>{

     setCounter(countValue+1)
 
    // setCounter(prevCounter=> prevCounter+1)
    // setCounter(prevCounter=> prevCounter+1)
    // setCounter(prevCounter=> prevCounter+1)
    // setCounter(prevCounter=> prevCounter+1)
  }
  const removeValue=()=>{
    
    if(countValue>0){
      setCounter(countValue-1)
    }
    
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>count value:{countValue}</h2>

      <button onClick={addValue}>Add {countValue}</button>
      <button onClick={removeValue}>Remove {countValue}</button>
      <p>Footer: {countValue}</p>
      
     
    </>
  )
}

export default App
