import readlineSync from 'readline-sync';
import { userName, greet } from './cli.js';
import { MAX_RANDOM_VALUE, MAX_ROUNDS } from './const.js';
import getRandomInt, { getGreatestCommonDivisor } from './math.js';

export default function play() {
  greet();
  let value1;
  let value2;
  let userAnswer;
  let correctAnswer;

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    value1 = getRandomInt(MAX_RANDOM_VALUE);
    value2 = getRandomInt(MAX_RANDOM_VALUE);
    correctAnswer = getGreatestCommonDivisor(value1, value2).toString();
    userAnswer = readlineSync.question(`Question: ${value1} ${value2}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
