import{ Link } from "react-router-dom"
import './NavBar.css'
const NavBar = () =>{
    return(
        <div className="bar">
            <div className="nav-bar">
                <Link to="/" className="item-nav">Home</Link>
                <Link to="/score" className="item-nav">Placar</Link>
                <Link to="/game" className="item-nav">Game</Link>
            </div>
            <div className="x">

            </div>
        </div>
    )
}

export default NavBar;