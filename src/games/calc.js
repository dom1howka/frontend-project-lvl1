import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';
  
const gameRules = 'What is the result of the expression?';
const calculation = (num1, num2, operator) => { 
  switch (operator) {
    case '+':
      return  num1 + num2;
    case '-':
      return  num1 - num2;
    case '*':
      return  num1 * num2;
    default:
      throw new Error(operator `${operator} - is incorrect!`); 
      } 
  };

const makeRound = () => {
const operator = ['+', '-', '*'] 
const number1 = getRandomInRange(1, 10);
const number2 = getRandomInRange(1, 10);
const getRandomOperator = getRandomInRange(0, operator.length - 1) 
const question = `${number1} ${operator[getRandomOperator]} ${number2}`;
const answer = String(calculation(number1, number2, operator[getRandomOperator]));
  return [question, answer];
};
   
export default () => {
  runEngine(gameRules, makeRound);
};

