import readlineSync from 'readline-sync';
import { userName, greet } from './cli.js';
import { ARRAY_SIZE, MAX_ROUNDS } from './const.js';
import getRandomInt, { getRandomProgression } from './math.js';

function convertArrayToQuestionString(arr, questionIndex) {
  return arr.map((item, i) => (i === questionIndex ? '..' : item.toString())).join(' ');
}

export default function play() {
  let progression;
  let randomIndex;
  let userAnswer;
  let correctAnswer;

  greet();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    progression = getRandomProgression(ARRAY_SIZE);
    randomIndex = getRandomInt(0, ARRAY_SIZE - 1);
    correctAnswer = progression[randomIndex].toString();
    userAnswer = readlineSync.question(`Question: ${convertArrayToQuestionString(progression, randomIndex)}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
