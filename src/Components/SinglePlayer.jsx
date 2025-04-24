import { useState, useEffect } from 'react';
import {fetchSinglePlayer} from '../API/index.js';
import {useParams,  Link} from 'react-router-dom';


function SinglePlayer ({}) {

       
        const {id} = useParams()
        const [player, setPlayer] = useState(null)
        
        useEffect (()=> {
            const getPlayerDetails = async() =>{
                const response = await fetchSinglePlayer(id)
                console.log(response)
                setPlayer(response.data.player)
            }
            getPlayerDetails()
        }, [])
    
        
    if (!player) {
        return (
            <div>
        <p>Player details initializing...</p>
        
            <Link to="/" >← Back to Players</Link>
            </div>
        )
    }
    
    return (
        <>
         <div >
      <img src={player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p><strong>Breed:</strong> {player.breed}</p>
      <p><strong>Status:</strong> {player.status}</p>
      <p><strong>Team:</strong> {player.team?.name || "No team"}</p>
      <Link to="/">← Back to Players</Link>
    </div>
         
        
        </>
    )
}

export default SinglePlayer