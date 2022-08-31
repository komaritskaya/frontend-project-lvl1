import readlineSync from 'readline-sync';
import {
  GAME_TYPE_CALC,
  GAME_TYPE_EVEN,
  GAME_TYPE_GCD,
  GAME_TYPE_PRIME,
  GAME_TYPE_PROGRESSION,
  MAX_ROUNDS,
} from './const.js';
import {
  congratulate,
  greet,
  showCorrectMessage,
  showErrorMessage,
  showStartMessage,
} from './games-cli.js';
import playCalc from './games/calc.js';
import playEven from './games/even.js';
import playGCD from './games/gcd.js';
import playPrime from './games/prime.js';
import playProgression from './games/progression.js';

const getUserName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Stranger';

const getGame = (gameType) => {
  switch (gameType) {
    case GAME_TYPE_EVEN:
      return playEven;
    case GAME_TYPE_CALC:
      return playCalc;
    case GAME_TYPE_GCD:
      return playGCD;
    case GAME_TYPE_PRIME:
      return playPrime;
    case GAME_TYPE_PROGRESSION:
      return playProgression;
    default:
      console.log('Please call a valid game');
      return null;
  }
};

const play = (gameType) => {
  const userName = getUserName();
  const game = getGame(gameType);
  let userAnswer;

  greet(userName);
  showStartMessage(gameType);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [questionString, correctAnswer] = game();

    userAnswer = readlineSync.question(`Question: ${questionString}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      showCorrectMessage();
    } else {
      showErrorMessage(userName, userAnswer, correctAnswer);
      return;
    }
  }

  congratulate(userName);
};

export default play;
