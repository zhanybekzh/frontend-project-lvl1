import startGame from '../index.js';
import getRandomInt from '../util.js';

const descr = 'What is the result of the expression?';

const getRound = () => {
  const randomNumber = getRandomInt(1, 100);
  const answer = check(randomNumber);
  const question = randomNumber;
  return [answer, question];
};

export default () => startGame(descr, getRound);