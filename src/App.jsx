import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import AllPlayers from './Components/AllPlayers'
import SinglePlayer from './Components/SinglePlayer'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  return (
    

<div className="app-container">
      <h1>Welcome To Puppy Bowl</h1>
      <Routes>
        <Route
          path="/"
          element={<AllPlayers setSelectedPlayerId={setSelectedPlayerId} />}
        />
        <Route
          path="/players/:id"
          element={<SinglePlayer />}
        />
      </Routes>
    </div>


  )
}


export default App
