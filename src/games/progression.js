import runEngine from '../index.js';
import getRandomInRange from '../getRandomInt.js';

  const gameRules = 'What number is missing in the progression?';

  const generateProgression = (number, length, step) => {
    const progression = [];
    for (let i = number; progression.length < length; i += step) {
      progression.push(i);
    }
    return progression;
  };
  
  const getProgression = () => {
    const randomNumber = getRandomInRange(1, 10);
    const rowStep = getRandomInRange(1, 5);
    const arrayLength = getRandomInRange(5, 15);
  
    const gameProgression = generateProgression(randomNumber, arrayLength, rowStep);
    const randomIndex = getRandomInRange(0, gameProgression.length - 1);
  
    const gameAnswer = String(gameProgression[randomIndex]);
  
    gameProgression[randomIndex] = '..';
  
    const gameQuestion = gameProgression.join(' ');
  
    return [gameQuestion, gameAnswer];
  };
  
  export default () => {
    runEngine(gameRules, getProgression);
  };