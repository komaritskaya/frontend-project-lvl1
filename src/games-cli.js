import {
  CALC_START_MESSAGE,
  EVEN_START_MESSAGE,
  GAME_TYPE_CALC,
  GAME_TYPE_EVEN,
  GAME_TYPE_GCD,
  GAME_TYPE_PRIME,
  GAME_TYPE_PROGRESSION,
  GCD_START_MESSAGE,
  PRIME_START_MESSAGE,
  PROGRESSION_START_MESSAGE,
} from './const.js';

export const greet = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const congratulate = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const showStartMessage = (gameType) => {
  switch (gameType) {
    case GAME_TYPE_EVEN:
      console.log(EVEN_START_MESSAGE);
      break;
    case GAME_TYPE_CALC:
      console.log(CALC_START_MESSAGE);
      break;
    case GAME_TYPE_GCD:
      console.log(GCD_START_MESSAGE);
      break;
    case GAME_TYPE_PRIME:
      console.log(PRIME_START_MESSAGE);
      break;
    case GAME_TYPE_PROGRESSION:
      console.log(PROGRESSION_START_MESSAGE);
      break;
    default:
      console.log('Please call a valid game');
  }
};

export const showCorrectMessage = () => {
  console.log('Correct!');
};

export const showErrorMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}`);
};
