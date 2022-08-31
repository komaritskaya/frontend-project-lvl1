import { ARRAY_SIZE } from '../const.js';
import { getRandomIntFromRange, getRandomProgression } from '../math.js';

const getProgressionQuestionString = (arr, questionIndex) => arr
  .map((item, i) => (i === questionIndex ? '..' : item.toString()))
  .join(' ');

const playProgression = () => {
  const progression = getRandomProgression(ARRAY_SIZE);
  const randomIndex = getRandomIntFromRange(0, ARRAY_SIZE - 1);
  const correctAnswer = progression[randomIndex].toString();

  return [getProgressionQuestionString(progression, randomIndex), correctAnswer];
};

export default playProgression;
