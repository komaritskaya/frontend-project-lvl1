import readlineSync from 'readline-sync';
import { userName, greet } from './cli.js';
import { MAX_RANDOM_VALUE, MAX_ROUNDS } from './const.js';
import getRandomInt from './math.js';

const answerMap = new Map([
  [0, 'yes'],
  [1, 'no'],
]);

export default function play() {
  greet();
  let question;
  let userAnswer;
  let correctAnswer;

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    question = getRandomInt(MAX_RANDOM_VALUE);
    correctAnswer = answerMap.get(question % 2);
    userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
