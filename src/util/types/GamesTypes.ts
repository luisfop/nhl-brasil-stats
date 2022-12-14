export interface GameType {
  gameDate?: Date;
  teams: { home: Team; away: Team };
  linescore: Linescore;
}

export type Linescore = {
  currentPeriod: number;
  currentPeriodTimeRemaining: string;
  currentPeriodOrdinal: string;

  intermissionInfo: {
    inIntermission: boolean;
    intermissionTimeRemaining: boolean;
  };
};

export type Team = {
  score: number;

  leagueRecord: {
    losses: number;
    ot: number;
    wins: number;
  };

  team: {
    name: string;
    id: number;
  };
};
