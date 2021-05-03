import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home_main">
            <div><Link to="/Game">START</Link></div>
            <div className="welcome"><p>MEMORY GAME</p></div>
            <div className="links">
                <i className="fab fa-angellist fa-4x"/>
                <i className="fas fa-american-sign-language-interpreting fa-3x"/>
                <i className="fas fa-allergies fa-4x"/>
                <i className="fas fa-handshake fa-3x"/>
                <i className="fas fa-thumbs-up fa-3x"/>
                <i className="fas fa-hands fa-3x"/>
            </div>
        </div>
        
    )
}

export default Home
