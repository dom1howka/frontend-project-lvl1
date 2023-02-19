import readlineSync from 'readline-sync';

const makeRound = (noteToGame, task) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  
  console.log(noteToGame);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const pairOfQuestionAndResult = task();
  
    console.log(`Question: ${pairOfQuestionAndResult[0]}`);
    const answerUser = readlineSync.question('Your answer: ');


    const rightAnswer = pairOfQuestionAndResult[1];
    if (answerUser === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default makeRound;