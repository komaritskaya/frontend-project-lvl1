import { MAX_RANDOM_VALUE } from '../const.js';
import { getRandomInt, applyOperator, getRandomOperator } from '../math.js';

const getCalcQuestionString = (value1, value2, operator) => `${value1} ${operator} ${value2}`;

const playCalc = () => {
  const value1 = getRandomInt(MAX_RANDOM_VALUE);
  const value2 = getRandomInt(MAX_RANDOM_VALUE);
  const operator = getRandomOperator();
  const correctAnswer = applyOperator(value1, value2, operator).toString();

  return [getCalcQuestionString(value1, value2, operator), correctAnswer];
};

export default playCalc;
