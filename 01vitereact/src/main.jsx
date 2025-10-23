import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>Hello this is another function</h1>
    </>
  )
}

// This code can't work bcz of wrong format 

// const ReactElement={
//   type:'a',    
//   props:{
//     href:"http://google.com",
//     target:"_blank"
//   },
//   children:"Click Me to visit Google"
// }

const username = "Google.com"
const ReactElement1 = (
  <a href="http://google.com" target='_blank'>Click Me </a>
)

const ReactElement2 = React.createElement(
  'a',
  { href: "http://google.com", target: '_blank' },
  'Click to visit ',
  username
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
  </StrictMode>
  // ReactElement1
  // ReactElement2

  
)
