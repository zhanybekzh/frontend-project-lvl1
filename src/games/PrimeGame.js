import startGame from '../index.js';
import getRandomInt from '../util.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const check = (num) => {
  const result = isPrime(num) ? 'yes' : 'no';
  return result;
};
const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRound = () => {
  const randomNum = getRandomInt(1, 100);
  const answer = check(randomNum);
  const question = randomNum;
  return [answer, question];
};
export default () => startGame(descr, getRound);
