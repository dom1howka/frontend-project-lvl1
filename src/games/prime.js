import runEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (num) => {
      if (num < 2) { return false; }
      let i = 2;
      while (i <= num / 2) {
        if (num % i === 0) { return false; }
        i += 1;
      }
      return true;
    };

    const getPrime = () => {
    const number = getRandomInt(2, 100);
    const question = `${number}`;
    const result = (isPrime(number) ? 'yes' : 'no');

    return [question, result];
  };

  export default () => {
    runEngine(gameRules, getPrime);
  }