import { MAX_RANDOM_VALUE } from '../const.js';
import { getRandomInt } from '../math.js';

const getEvenQuestionString = (value) => value.toString();

const playEven = () => {
  const value = getRandomInt(MAX_RANDOM_VALUE);
  const correctAnswer = value % 2 ? 'no' : 'yes';

  return [getEvenQuestionString(value), correctAnswer];
};

export default playEven;
