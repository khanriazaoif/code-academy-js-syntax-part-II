// const team = {
//   _players: [
//     {
//       firstName: 'Pablo',
//       lastName: 'Sanchez',
//       age: 11,
//     },
//     {
//       firstName: 'Pele',
//       lastName: 'Brazil',
//       age: 11,
//     },
//     {
//       firstName: 'Maradona',
//       lastName: 'Argentina',
//       age: 11,
//     },
//   ],
//   get players() {
//     return this._players;
//   },
//   _games: [
//     {
//       opponent: 'Broncos',
//       teamPoints: 42,
//       opponentPoints: 27,
//     },
//     {
//       opponent: 'Lions',
//       teamPoints: 21,
//       opponentPoints: 27,
//     },
//     {
//       opponent: 'Patriots',
//       teamPoints: 52,
//       opponentPoints: 17,
//     },
//   ],
//   get games() {
//     return this._games;
//   },
//   addPlayer(firstName, lastName, age) {
//     const player = {
//       firstName,
//       lastName,
//       age,
//     };
//     this.players.push(player);
//   },
//   addGame(opponent, teamPoints, opponentPoints) {
//     const game = {
//       opponent,
//       teamPoints,
//       opponentPoints,
//     };
//     this.games.push(game);
//   },
// };

// console.log(team.addPlayer('Steph', 'Curry', 28));
// console.log(team.addPlayer('Lisa', 'Leslie', 44));
// console.log(team.addPlayer('Bugs', 'Bunny', 76));

// console.log(team.addGame('1', 24, 76));
// console.log(team.addGame('2', 44, 26));
// console.log(team.addGame('3', 24, 21));

// console.log(team);

// BREAK

// const timeFuncRuntime = (funcParameter) => {
//   const t1 = Date.now();
//   funcParameter();
//   const t2 = Date.now();
//   return t2 - t1;
// };

// const addOneToOne = () => 1 + 1;
debugger;
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = (num) => num + 2;
console.log(typeof num);

const timeFuncRuntime = (funcParameter) => {
  console.log(typeof funcParameter);
  const t1 = Date.now();
  funcParameter();
  const t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
  console.log(typeof checkConsistentOutput);
  console.log(typeof func);
  console.log(typeof val);

  const firstTry = func(val);
  const secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  }
  return 'This function returned inconsistent results';
};

console.log(checkConsistentOutput(addTwo, 10));
console.log(checkConsistentOutput(addTwo, 15));
console.log(checkConsistentOutput(addTwo, 20));
