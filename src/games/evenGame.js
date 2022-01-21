import startGame from '../index.js';
import getRandomInt from '../util.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getRound = () => {
  const randomNumber = getRandomInt(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return [answer, question];
};
export default () => startGame(description, getRound);
