import startGame from '../index.js';
import {getRandomInt} from '../util.js';

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num2 > num1) {
    return gcd(num2, num1);
  }
  if (num1 % num2 === 0) {
    return num2;
  }
  return gcd(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';

const getRound = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const answer = String(gcd(randomNumber1, randomNumber2));
  const question = `${randomNumber1} ${randomNumber2}`;
  return [answer, question];
};
export default () => startGame(description, getRound);
