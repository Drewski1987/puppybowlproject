import NewPlayerForm from "./NewPlayerForm";
import SinglePlayer from "./SinglePlayer";
import AllPlayers from "./AllPlayers";
import { Routes, Route } from "react-router-dom";


export default function Home({}){
    return (
        <>
        <Routes>
            <Route path = "/" element={<AllPlayers/>}/>
            <Route path = "/players/:id" element={<SinglePlayer />} />
            <Route path = "/newplayerform" element={<NewPlayerForm />} />
        </Routes>

        </>
    )

}