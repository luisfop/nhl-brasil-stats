import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <header className="header">

            <h1>NHL Brasil Stats</h1>

            <nav className="navigation__list">
                <ul>
                    <li>Times</li>
                    <li>Jogos</li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
