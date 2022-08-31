import readlineSync from 'readline-sync';
import {
  MAX_ROUNDS,
} from './const.js';
import {
  congratulate,
  greet,
  showCorrectMessage,
  showErrorMessage,
  showStartMessage,
} from './games-cli.js';

const getUserName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ') || 'Stranger';

const play = (gameType, callback) => {
  const userName = getUserName();
  let userAnswer;

  greet(userName);
  showStartMessage(gameType);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [questionString, correctAnswer] = callback();

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
