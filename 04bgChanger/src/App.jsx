
import { useState } from "react"

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
     <div className="w-full h-screen duration-200 text-white relative"
      style={{backgroundColor : color}}
    >
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-wrap justify-center px-4 py-4 bg-black rounded-xl w-150 ">Background Changer</h1>
      <div className="fixed bottom-12 inset-x-0 flex flex-wrap justify-center ">
        <div className="bg-white rounded-3xl px-3 py-2 shadow-lg gap-3 flex flex-wrap justify-center">
          <button className="outline-none rounded-full px-4 py-1 shadow-lg  "
            style={{background:"red"}}

            onClick={()=>setColor("red")}
          >Red</button>
          <button className="outline-none rounded-full px-4 py-1 shadow-lg "
            style={{background:"green"}}
            onClick={()=>setColor("green")}
          >Green</button>
          <button className="outline-none rounded-full px-4 py-1 shadow-lg "
            style={{background:"blue"}}
            onClick={()=>setColor("blue")}
          >Blue</button>
          <button className="outline-none rounded-full px-4 py-1 shadow-lg "
            style={{background:"black"}}
            onClick={()=>setColor("black")}
          >Black</button>
          <button className="outline-none rounded-full px-4 py-1 shadow-lg "
            style={{background:"olive"}}
            onClick={()=>setColor("olive")}
          >Olive</button>
        </div>
      </div>
      
    </div>
    
    
    </>
  )
}

export default App
