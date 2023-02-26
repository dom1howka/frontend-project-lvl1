import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';
  
const gameRules = 'What is the result of the expression?';

const calculation = (num1, num2, operators) => { 
  switch (operators) {
    case '+':
      return  num1 + num2;
    case '-':
      return  num1 - num2;
    case '*':
      return  num1 * num2;
    default:
      return null;
  }
}; 

  const makeRound = () => {
    const operators = ['+', '-', '*'] 
    const number1 = getRandomInRange(1, 10);
    const number2 = getRandomInRange(1, 10);
    const getRandomOperator = getRandomInRange(0, operators.length - 1) 

  const question = `${number1} ${operators[getRandomOperator]} ${number2}`;
  const rightAnswer = String(calculation(number1, number2, operators[getRandomOperator]));
  return [question, rightAnswer];
};
   
export default () => {
  runEngine(gameRules, makeRound);
}

