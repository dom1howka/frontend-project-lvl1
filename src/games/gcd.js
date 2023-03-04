import runEngine from "../index.js";
import getRandomInRange from "../getRandomInRange.js";

const gameRules = "Find the greatest common divisor of given numbers.";
const findGcd = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return getGcd(num2, num1 % num2);
};

const getGcd = () => {
  const number1 = getRandomInRange(1, 22);
  const number2 = getRandomInRange(1, 22);
  const question = `${number1} ${number2}`;
  const result = String(getGcd(number1, number2));
  return [question, result];
};

export default () => {
  runEngine(gameRules, getGcd);
};
