const operationsMap = new Map([
  ['*', (n1, n2) => n1 * n2],
  ['+', (n1, n2) => n1 + n2],
  ['-', (n1, n2) => n1 - n2],
]);

export default function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomOperator() {
  const operators = [...operationsMap.keys()];

  return operators[getRandomInt(operators.length - 1)];
}

export function applyOperator(n1, n2, operator) {
  return operationsMap.get(operator)(n1, n2);
}
