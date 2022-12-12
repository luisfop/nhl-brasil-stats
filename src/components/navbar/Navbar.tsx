import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="header">

            <h1>NHL Brasil Stats</h1>

            <ul className="navigation__list">
                <li>Times</li>
                <li>Jogos</li>
            </ul>

        </header>
    )
}

export default Navbar
