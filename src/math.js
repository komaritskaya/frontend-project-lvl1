import {
  ARITHMETIC_PROGRESSION_START_VALUE_MIN,
  ARITHMETIC_PROGRESSION_START_VALUE_MAX,
  ARITHMETIC_PROGRESSION_STEP_MAX,
  ARITHMETIC_PROGRESSION_STEP_MIN,
} from './const.js';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomItemFromArray(arr) {
  return arr[getRandomInt(arr.length - 1)];
}

export function getRandomOperator() {
  return getRandomItemFromArray(['+', '-', '*']);
}

export function applyOperator(n1, n2, operator) {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
    default:
      return n1 * n2;
  }
}

export function getGreatestCommonDivisor(n1, n2) {
  if (!n2) {
    return n1;
  }

  return getGreatestCommonDivisor(n2, n1 % n2);
}

export function getRandomProgression(length) {
  const startValue = getRandomIntFromRange(
    ARITHMETIC_PROGRESSION_START_VALUE_MIN,
    ARITHMETIC_PROGRESSION_START_VALUE_MAX,
  );
  const step = getRandomIntFromRange(
    ARITHMETIC_PROGRESSION_STEP_MIN,
    ARITHMETIC_PROGRESSION_STEP_MAX,
  );

  return Array(length).fill(null).map((item, i) => startValue + step * (i + 1));
}

export function checkPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}
