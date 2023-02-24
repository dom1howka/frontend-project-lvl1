import runEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  
  const makeRound = () => {
  const number = getRandomInt(1, 20);

  const isEven = (num) => num % 2 === 0;
  const question = `${number}`;
  const result = (isEven(number) ? 'yes' : 'no');
  return [question, result];
  };

  export default () => {
    runEngine(gameRules, makeRound);
  }