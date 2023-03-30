
import { useEffect } from "react";
import{ Link } from "react-router-dom"
import '../css/Home.css'
const Home = () => {
    useEffect(()=>{
        console.log("casc")
    }, [])
    return (
        <div className="home">
            <h1 className="h1-home">Bem-Vindo ao Jogo da velha</h1>

            <div className="options">
                <li>
                    <a>
                        <Link to="/score">                        
                            <button className="btn-options" >Ver placar agregado</button>
                        </Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="/game">
                            <button className="btn-options">Ir para o jogo</button>
                        </Link>
                    </a>
                </li>
            </div>
        </div>
    );
}

export default Home;