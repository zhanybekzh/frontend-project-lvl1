import startGame from '../index.js';
import getRandomInt from '../util.js';

const isEven = (num) => num % 2 === 0;
const check = (num) => {
  const result = isEven(num) ? 'yes' : 'no';
  return result;
};
const descr = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRound = () => {
  const randomNumber = getRandomInt(1, 100);
  const answer = check(randomNumber);
  const question = randomNumber;
  return [answer, question];
};
export default () => startGame(descr, getRound);
