import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import NavBar from './components/NavBar'
import Data from './Data'

function App() {
  const [count, setCount] = useState(0)
  const Cards = Data.map(item=>{
    return (
      <Card key={item.id}{...item} />
    )
  })

  return (
    <div className="App">
      <NavBar />
      <section className='cards-section'>
      {Cards}
      </section>


    </div>
  )
}

export default App
