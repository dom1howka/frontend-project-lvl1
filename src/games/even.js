import basisOfGames from '../index.js';
import getRandomInt from '../getRandomInt.js';

const evenGame = () => {

  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  
    
    const taskEven = () => {
    const number = getRandomInt(100);

  
    const isEven = (num) => num % 2 === 0;
    const question = `${number}`;
    const result = (isEven(number) ? 'yes' : 'no');
    return [question, result];
  };
  basisOfGames(noteToEven, taskEven);
};

export default evenGame;
