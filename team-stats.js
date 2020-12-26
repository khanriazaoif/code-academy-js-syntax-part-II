const team = {
    _players: [
        {
            firstName: 'Riaz',
            lastName: 'Khan',
            age: 41
          },
          {
            firstName: 'Kamal',
            lastName: 'Xavier',
            age: 11
          },
          {
            firstName: 'Zara',
            lastName: 'Isabella',
            age: 7
          }
    ],
    get players() {
        return this._games;
    },
    _games: [
        {
            opponent: 'Cowboys',
            teamPoints: 42,
            opponentPoints: 17
          },
          {
            opponent: 'Patriots',
            teamPoints: 12,
            opponentPoints: 27
          },
          {
            opponent: 'Lions',
            teamPoints: 32,
            opponentPoints: 56
          }
    ],
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints){
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this._games.push(game);

    }


};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Jacksonville', 12, 28);
team.addGame('Tampa', 32, 18);
team.addGame('Miami', 21, 35);



console.log(team._players);
console.log(team._games);