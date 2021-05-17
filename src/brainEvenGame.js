import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const oneRound = () => {
  const number = getRandomInt(1, 100);
  const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
  if (
    (isEven(number) && answer === 'yes')
    || (!isEven(number) && answer === 'no')
  ) {
    return true;
  }
  return false;
};
const checkAnswer = (boolean) => {
  if (boolean) {
    console.log('Correct!');
    return true;
  }
  return false;
};
export default (playerName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    if (!checkAnswer(oneRound())) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${playerName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
