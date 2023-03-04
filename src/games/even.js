import runEngine from "../index.js";
import getRandomInRange from "../getRandomInRange.js";

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const isEven = (num) => num % 2 === 0;
  const question = `${number}`;
  const answer = isEven(number) ? "yes" : "no";
  return [question, answer];
  const number = getRandomInRange(1, 20);
};

export default () => {
  runEngine(gameRules, makeRound);
};
