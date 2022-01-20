import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomInt from '../util.js';

const description = 'What is the result of the expression?';
const calculateFunction = (pair, operation) => {
  switch (operation) {
    case '+':
      return car(pair) + cdr(pair);
    case '-':
      return car(pair) - cdr(pair);
    case '*':
      return car(pair) * cdr(pair);
    default:
      return null;
  }
};
const operations = ['+', '-', '*'];
const getRound = () => {
  const firstRandomNumber = getRandomInt(1, 100);
  const secondRandomNumber = getRandomInt(1, 100);
  const randomIndex = getRandomInt(0, 2);
  const pair = cons(firstRandomNumber, secondRandomNumber);
  const question = `${car(pair)} ${operations[randomIndex]} ${cdr(pair)}`;
  const answer = String(calculateFunction(pair, operations[randomIndex]));
  return [answer, question];
};

export default () => startGame(description, getRound);
