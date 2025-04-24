import { useState } from "react"
import { addPlayer } from '../API/index.js'




    function NewPlayerForm ({}){
        const [name, setName] = useState("")
        const [breed, setBreed] = useState("")
        const [status, setStatus] = useState("")
        const [imageUrl, setImageUrl] = useState("")
        const [successMessage, setSuccessMessage]= useState("")
        
        
        async function handleSubmit(event) {
            event.preventDefault()
            
            async function newPlayer (){
            console.log(name)   
            const response = await addPlayer ({

                setName,
                setBreed,
                setStatus,
                setImageUrl,
            })
            console.log(response)
                if (response.success === true) setSuccessMessage("Player Created")
                }
            newPlayer()
        }
            
    
    return (
        
         <div className = "newplayerForm" >
            <h2><strong>Create Your Own Puppy</strong></h2>
            <form onSubmit = {handleSubmit}>
            <label>
                Name: 
                <input 
                type = "text"
                required
                value = {name}
                onChange={(event) => setName(event.target.value)}
                
                />
            </label>
            <br />
            
            <label>
          Breed:
          <input
            type="text"
            required
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />
        </label>
        <br />
            <label>
                Status:
                <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}>
                    <option value="">--Select Status--</option>
                    <option value="bench">Bench</option>
                    <option value="field">Field</option>
                </select>
            </label>
            <br />
            <label>
                Add Image Url:
                <input 
                type = "text"
                required
                value = {imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
                
                />
            </label>
            <br />
            <button type="submit">Add Player</button>
            </form>
        </div>
       
    )
}

export default NewPlayerForm