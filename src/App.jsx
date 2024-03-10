import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concepts Recap </h1>
      <li>1. Componens</li>
      <li>2. Jsx</li>
      <li>3. Props</li>
      <li>4. EventHandler</li>
      <li>5. State</li>
      <li>5. Load Data</li>
      <hr />
      <Posts></Posts>
    </>
  )
}

export default App
