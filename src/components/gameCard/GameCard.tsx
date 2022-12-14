import React from 'react'
import './GameCard.css';

import { GameType } from '../../util/types/GamesTypes'

const GameCard = ({teams} : {teams: GameType} ) => {

    const { home,away } = teams.teams;

    const homeTeam = home;
    const awayTeam = away;
    const homeTeamID: number = homeTeam.team.id;
    const awayTeamID: number = awayTeam.team.id;

    return (
        <div className="gamecard">
            <div className="gamecard__time">
                <h2 className="">{teams.linescore.currentPeriodTimeRemaining}</h2>
                <time>{teams.linescore.currentPeriodOrdinal} Periodo</time>
            </div>

            <div className="teams">
                <div className="team">
                    <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${homeTeamID}.svg`} alt="" className="team__image" />
                    <span>{homeTeam.score}</span>
                    <p className="team__title">{homeTeam.team.name}</p>
                </div>

                <div className="team">
                <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-dark/${awayTeamID}.svg`} alt="" className="team__image" />
                    <span>{awayTeam.score}</span>
                    <p className="team__title">{awayTeam.team.name}</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard
