import runEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

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
  const lenght = getRandomInRange(5, 15);
  const progression = generateProgression(randomNumber, lenght, rowStep);
  const randomIndex = getRandomInRange(0, progression.length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  runEngine(gameRules, getProgression);
};
