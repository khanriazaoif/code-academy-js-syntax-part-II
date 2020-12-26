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
        // debugger;
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this._players.push(player);
    }


};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


console.log(team._players);