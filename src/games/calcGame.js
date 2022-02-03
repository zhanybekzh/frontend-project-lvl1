import startGame from '../index.js';
import {getRandomInt} from '../util.js';

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
  const randomIndex = getRandomInt(0, operations.length - 1);
  const question = `${firstRandomNumber} ${operations[randomIndex]} ${secondRandomNumber}`;
  const answer = String(calculateFunction(firstRandomNumber, secondRandomNumber, operations[randomIndex]));
  return [answer, question];
};

export default () => startGame(description, getRound);
