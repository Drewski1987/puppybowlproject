import { useEffect, useState } from 'react';
import { fetchAllPlayers } from '../API/index.js';
import NewPlayerForm from './NewPlayerForm.jsx';
import { Link } from 'react-router-dom';


function AllPlayers () {
const [players, setPlayers] = useState([])
const [searchPlayer, setSearchPlayer] = useState("")






useEffect(()=> {
    const getPlayers = async() => {
        const res = await fetchAllPlayers()
        console.log(res)
        setPlayers(res.data.players)
    }
    getPlayers()
    
}, [])

const filteredPlayers = players.filter((player)=>
    player.name.toLowerCase().includes(searchPlayer.toLowerCase())
)


return(

<div className="playersContainer">
      <h2>Puppy Bowl Friends</h2>

      <NewPlayerForm setPlayers={setPlayers} />

     
      <input
        type="text"
        placeholder="Search players..."
        value={searchPlayer}
        onChange={(e) => setSearchPlayer(e.target.value)}
        
      />

      <div className="filteredContainer">
        {filteredPlayers.map((player) => (
          <div key={player.id} >
            <img src={player.imageUrl}  />
            <h2>{player.name}</h2>
            <p><strong>Breed:</strong> {player.breed}</p>
            <p><strong>Status:</strong> {player.status}</p>
            <Link to={`/players/${player.id}`} >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>


)
}

export default AllPlayers