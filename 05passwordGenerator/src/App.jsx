import {  useState,useCallback, useEffect, useRef } from 'react'

function App() {

      // const [Length,setLength]=useState(8);
      // const [Number , setNumber]= useState(false);
      // const [Character, setCharater]= useState(false);
      // const [Password, setPassword]= useState("")

      // const passwordRef=useRef(null);

      // const passwordGenerator=useCallback(()=>{
      //   let pass=""
      //   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      //   if (Number) str += "0123456789"
      //   if(Character) str += "!@#$%^&*()_+|?><:{}[]\';./,"

      //   for (let i = 1; i <= Length; i++) {
      //     let char = Math.floor(Math.random() * str.length )
      //     pass += str.charAt(char)
      //   }
      //   setPassword(pass)

      // },[Length,Number,Character,setPassword])

      // const passwordCopyToClipboard=()=>{
      //   passwordRef.current.select(Password)
      //   passwordRef.current.setSelectionRange(0 ,100)
      //   window.navigator.clipboard.writeText(Password);
      // }

      // useEffect(()=>{
      //   passwordGenerator();
      // },[Length,Number,Character,passwordGenerator])

      
      const [Length,setLength]=useState(8)
      const [Number, setNumber]=useState(false)
      const [Character, setCharater]=useState(false)
      const [Password, setPassword]=useState("");
      
      
      const passwordGenerator=useCallback(()=>{

        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(Number) str += "0123456789"
        if(Character) str +="!@#$%^&*()_+{}:|<>/,.\';[]=-?"
        
        for (let i = 1; i < Length; i++) {
          let char = Math.floor(Math.random() * str.length )

          pass += str.charAt(char);
          
        }
        setPassword(pass)
      }, [Length, Number, Character, setPassword])

      useEffect(()=>{
        passwordGenerator()
      },[Length, Number, Character, passwordGenerator])

      const passwordRef=useRef(null);

      const passwordCopyToClipboard=()=>{
        passwordRef.current.select()
        passwordRef.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(Password)
 
      }
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md bg-gray-700 rounded-lg px-4 py-3 my-8 text-orange-500">
        <h3 className="text-white text-2xl text-center my-3">
          Password generator
        </h3>

        <div className="flex shadow rounded-lg overflow-hidden  mb-4">
          <input
            type="text"
            value={Password}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3 bg-white text-black"
            ref={passwordRef}
            
          />
          <button
            className="outline-none text-white px-4 py-2 "
            onClick={passwordCopyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-3'>

          <div className='flex gap-x-1 '>
            <input type="range"
             min={8}
             max={100}
             value={Length}
             onChange={(e)=>{setLength(e.target.value)}}
            
             />
            
             <label className='text-lg' >Length: {Length}</label>
          </div>
          <div className='flex gap-x-2 '>
          <input type="checkbox" 
            defaultChecked = {Number}
            onChange={()=>{
              
              setNumber((prev)=>!prev)}}
          />
          <label className='text-lg'>Number</label>
          <input type="checkbox" 
            defaultChecked={Character}
            onChange={()=>{
              setCharater((prev)=>!prev)
            }}
             />
          <label className='text-lg'>Character</label>
        </div>
        </div>
      </div>
      

    </>
  )
}

export default App
