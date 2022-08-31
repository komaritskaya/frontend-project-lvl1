import { GAME_TYPE_GCD, MAX_RANDOM_VALUE } from '../const.js';
import play from '../main.js';
import { getRandomInt, getGreatestCommonDivisor } from '../math.js';

const getGCDQuestionString = (value1, value2) => `${value1} ${value2}`;

const playGCD = () => {
  const value1 = getRandomInt(MAX_RANDOM_VALUE);
  const value2 = getRandomInt(MAX_RANDOM_VALUE);
  const correctAnswer = getGreatestCommonDivisor(value1, value2).toString();

  return [getGCDQuestionString(value1, value2), correctAnswer];
};

export default () => play(GAME_TYPE_GCD, playGCD);
