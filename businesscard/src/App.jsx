import { useState } from 'react'

import './App.css'
import BusinessCard from './BusinessCard'
import Info from "./components/Info"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BusinessCard />
    </div>
  )
}

export default App
