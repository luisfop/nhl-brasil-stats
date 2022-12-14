import React, { useEffect, useState } from 'react'
import './Home.css'
import API from '../../services/api'
import { GameType } from '../../util/types/GamesTypes'
import GameCard from '../../components/gameCard/GameCard'

const Home = () => {

    const [games, setGames] = useState<GameType[]>([])

    useEffect(() => {
        API.getGames().then(games => {
            setGames(games.data.dates[0].games)
        });
    }, [])

    return (
        <main className="section container">

            <h3 className="home__title">Jogos de hoje</h3>
            <section className="container hero">
                {games.map((game, index) => (
                    <GameCard teams={game} key={index} />
                ))}
            </section>



        </main>
    )
}

export default Home
