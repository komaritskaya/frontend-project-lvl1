import { GAME_TYPE_PRIME, MAX_RANDOM_VALUE } from '../const.js';
import play from '../main.js';
import { getRandomInt, checkPrime } from '../math.js';

const getPrimeQuestionString = (value) => value.toString();

const playPrime = () => {
  const value = getRandomInt(MAX_RANDOM_VALUE);
  const correctAnswer = checkPrime(value) ? 'yes' : 'no';

  return [getPrimeQuestionString(value), correctAnswer];
};

export default () => play(GAME_TYPE_PRIME, playPrime);
