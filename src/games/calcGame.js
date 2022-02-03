import startGame from '../index.js';
import getRandomInt from '../util.js';

const description = 'What is the result of the expression?';
const calculateFunction = (firstNum, secondNum, operation) => {
  switch (operation) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};
const operations = ['+', '-', '*'];
const getRound = () => {
  const firstRandomNumber = getRandomInt(1, 100);
  const secondRandomNumber = getRandomInt(1, 100);
  const randomOperation = operations[getRandomInt(0, operations.length - 1)];
  const question = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
  const answer = String(calculateFunction(firstRandomNumber, secondRandomNumber, randomOperation));
  return [answer, question];
};

export default () => startGame(description, getRound);
