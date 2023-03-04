import readlineSync from "readline-sync";

const runEngine = (rules, makeRound) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound();
    console.log(`Question: ${question}`);
    const rightAnswer = readlineSync.question("Your answer: ");
    if (answer === rightAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `"${rightAnswer}" is wrong answer ;(. Correct answer was "${answer}". \nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
