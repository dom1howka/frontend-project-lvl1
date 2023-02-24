import runEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';
  
const gameRules = 'What is the result of the expression?';

const calculation = (num1, num2, operators) => {
  let result = ''; 
  switch (operators) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      return null;
  }
  return result;
}; 

  const makeRound = () => {
    const operators = ['+', '-', '*'] 
    const number1 = getRandomInt(1, 10);
    const number2 = getRandomInt(1, 10);
    const getRandomOperator = getRandomInt(0, operators.length - 1) 

  const question = `${number1} ${operators[getRandomOperator]} ${number2}`;
  const rightAnswer = String(calculation(number1, number2, operators[getRandomOperator]));
  return [question, rightAnswer];
};
   
export default () => {
  runEngine(gameRules, makeRound);
}

