const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let profile = {}
rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  profile.Name = name;
  rl.question("What's an activity you like doing?", (activity) => {
    profile.Activity = activity;
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
      profile.FavouriteMeal = meal;
      rl.question("What's your favourite thing to eat for that meal?", (food) => {
        profile.FavouriteFood = food;
        rl.question("Which sport is your absolute favourite?", (sport) => {
          profile.Sport = sport;
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (power) => {
            profile.Superpower = power;
            console.log(profile)
            rl.close();
          });
        });
      });
    });
  });
});

