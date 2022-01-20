import startGame from '../index.js';
import getRandomInt from '../util.js';

const generateProgression = (length, step, firstElement) => {
  const arr = [];
  let k = firstElement;
  for (let i = 0; i < length; i += 1) {
    arr[i] = k;
    k += step;
  }
  return arr;
};
const hideElement = (arr, index) => {
  const newArr = [...arr];
  newArr[index] = '..';
  return newArr;
};
const description = 'What number is missing in the progression?';

const getRound = () => {
  const progressionLength = getRandomInt(5, 12);
  const progressionStep = getRandomInt(1, 10);
  const indexOfHiddenElement = getRandomInt(0, progressionLength - 1);
  const firstElement = getRandomInt(1, 100);
  const progressionArray = generateProgression(progressionLength, progressionStep, firstElement);
  const answer = String(progressionArray[indexOfHiddenElement]);
  const newProgressionArray = hideElement(progressionArray, indexOfHiddenElement);
  const question = newProgressionArray.join(' ');
  return [answer, question];
};
export default () => startGame(description, getRound);
