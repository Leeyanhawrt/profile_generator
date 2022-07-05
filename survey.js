const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What activities do you like to do? ', (activity) => {
    rl.question(`What do you listen to while ${activity}? `, (music) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)? `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
                console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, perfers ${sport} over any other sport, and is amazing at ${superpower}`)
              rl.close();
            })
          })
        })
      })
    })
  })
});