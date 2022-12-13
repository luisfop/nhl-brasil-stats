export type GameType = {
    gameDate?: Date;
    teams:{home: Team, away:Team}
};


export type Team = {
    score: number,

    leagueRecord: {
        losses: number;
        ot: number;
        wins: number;
    },
    
    team:{
        name: string;
        id: number;
    }
};