const cohortName = "2501-PUPPIES";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

export async function fetchAllPlayers (){
    try{
        const res = await fetch(API_URL);
        console.log(res)
        const data = await res.json()
        return data

    }catch(error){
        console.error("Try Again", error);
    }
    
}

export async function fetchSinglePlayer (id){
    try{
        const response = await fetch (`${API_URL}/${id}`);
        const res = await response.json()
        return res;
    }catch(error){
        console.error("Error fetching all players:", error)
    }
}


export async function addPlayer({
    name,
    breed,
    status,
    image,
}){
    try {
        const response = await fetch(`${API_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    breed,
                    status,
                    imageUrl: image,
                })
            });
        const res = await response.json()
        return res

    } catch (error) {
        console.log("Error adding new player:",error);
    } 

}

export async function removePlayer(id){
try{
    const response = await fetch (`${API_URL}/${id}`, {
        method: "DELETE",
    });
    const res = await response.json();
    return res;

} catch (error) {
  console.error("Error deleting player:", error);
}
    

}
