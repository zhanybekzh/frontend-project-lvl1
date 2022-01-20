import startGame from '../index.js';
import getRandomInt from '../util.js';

const gcd = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  const maxNum = (num1 < num2) ? num2 : num1;
  const minNum = (num1 >= num2) ? num2 : num1;
  const iter = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return iter(min, max % min);
  };
  return iter(maxNum, minNum);
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
