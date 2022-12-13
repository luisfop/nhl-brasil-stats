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
            // fetched games
        });
    }, [])

    return (
        <section className="section container">

            <h3 className="section__subtitle">Jogos de hoje</h3>
            <section className="container hero">

                {games.map(game => (
                    <GameCard teams={game} />
                ))}


            </section>



        </section>
    )
}

export default Home
