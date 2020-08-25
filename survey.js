const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answerObj = {};

rl.question('What is your name?  ', (answer1) => {
  answerObj.answer1 = answer1;
  rl.question('What is your favourite activity?  ', (answer2) => {
    answerObj.answer2 = answer2;
    rl.question(`What do you listen to while doing ${answerObj.answer2}?  `, (answer3) => {
      answerObj.answer3 = answer3;
      rl.question(`What is your favourite meal of the day (breakfast, brunch, lunch, brinner, dinner)?  `, (answer4) => {
        answerObj.answer4 = answer4;
        rl.question(`What is your favourite thing to eat at that meal?  `, (answer5) => {
          answerObj.answer5 = answer5;
          rl.question(`Which sport is your absolute favourite?  `, (answer6) => {
            answerObj.answer6 = answer6;
            rl.question(`What is your superpower?  `, (answer7) => {
              answerObj.answer7 = answer7;
              console.log(`${answerObj.answer1} loves listening to ${answerObj.answer3} while ${answerObj.answer2}, devouring ${answerObj.answer5} for ${answerObj.answer4}, prefers ${answerObj.answer6} over any other sport, and is amazing at ${answerObj.answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
