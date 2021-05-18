import startGame from '../index.js';
import getRandomInt from '../util.js';

const findMin = (num1, num2) => (num1 >= num2 ? num2 : num1);

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  for (let i = findMin(num1, num2); i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const descr = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const answer = String(gcd(randomNumber1, randomNumber2));
  const question = `${randomNumber1} ${randomNumber2}`;
  return [answer, question];
};
export default () => startGame(descr, getRound);
