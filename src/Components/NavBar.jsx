import { Link } from 'react-router-dom';



export default function NavBar () {

    return (
        <div className="navbar">

            <Link to="/">Players Home</Link>
            <br/>
            <Link to="/newplayerform">Create Players</Link>
        
        </div>
    )
}
