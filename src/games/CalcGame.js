import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '../index.js';
import getRandomInt from '../util.js';

const description = 'What is the result of the expression?';
const sum = (pair) => car(pair) + cdr(pair);
const diff = (pair) => car(pair) - cdr(pair);
const multiply = (pair) => car(pair) * cdr(pair);
const functionsOfOperations = [sum, diff, multiply];
const operations = ['+', '-', '*'];
const getRound = () => {
  const firstRandomNumber = getRandomInt(1, 100);
  const secondRandomNumber = getRandomInt(1, 100);
  const randomIndex = getRandomInt(0, 2);
  const pair = cons(firstRandomNumber, secondRandomNumber);
  const question = `${car(pair)} ${operations[randomIndex]} ${cdr(pair)}`;
  const answer = String(functionsOfOperations[randomIndex](pair));
  return [answer, question];
};

export default () => startGame(description, getRound);
