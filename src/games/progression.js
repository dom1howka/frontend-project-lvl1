import runEngine from '../index.js';
import getRandomInt from '../getRandomInt.js';

  const gameRules = 'What number is missing in the progression?';

  const progressionArray = (number, length, step) => {
    const newArray = [];
    for (let i = number; newArray.length < length; i += step) {
      newArray.push(i);
    }
    return newArray;
  };
  
  const getProgression = () => {
    const randomNumber = getRandomInt(1, 10);
    const rowStep = getRandomInt(1, 5);
    const arrayLength = getRandomInt(5, 15);
  
    const gameProgression = progressionArray(randomNumber, arrayLength, rowStep);
    const randomIndex = getRandomInt(0, gameProgression.length - 1);
  
    const gameAnswer = String(gameProgression[randomIndex]);
  
    gameProgression[randomIndex] = '..';
  
    const gameQuestion = gameProgression.join(' ');
  
    return [gameQuestion, gameAnswer];
  };
  
  export default () => {
    runEngine(gameRules, getProgression);
  };