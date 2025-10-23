import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Card from './component/newCard'

function App() {
  const [count, setCount] = useState(0)

  let obj1={
    name:"Mike Thomas",
    age:18,
    location:"Paris, France",
    discription:"An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm."
    ,img:"https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
  }
  let obj2={
    location:"London, USA",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur in optio eveniet deleniti expedita corporis ipsum et illum ad odit iure eligendi quam, rem beatae officia, ex, aut minima consequuntur.Minima rem numquam animi voluptates nobis illum quaerat sit assumenda velit exercitationem fuga natus voluptatibus perferendis nostrum."
    ,img:"/david.jpg"
  }
  return (
    <>
      <h1 className='bg-lime-300 font-bold p-4 rounded-xl'>Tailwind</h1>
      <Card  object={obj1} />
      <Card username="Tim David"  object2={obj2} />
     
    </>
  )
}

export default App
