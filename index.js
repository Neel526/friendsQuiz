var readlinesync = require("readline-sync");
var chalk = require("chalk");

var userName = readlinesync.question(chalk.hex('#441ED4').italic.bold ("Please enter your name: "))
console.log(chalk.hex('#000000').hex('#ffffff').underline("Welcom "+ userName + "!"));

var score = 0;
function friendsQuiz(question, answer){
  var userAns = readlinesync.question(question)
  if(userAns === answer){
    console.log(chalk.bgGreen("correct!"));
    score = score+1;
  }else {
    console.log(chalk.bgRed("incorrect!"));
  }
  console.log(chalk.black.bgWhite.bold("Current Score: "+ score))
  console.log("-------------------")  
}

queA = {
  question: "How many times did Ross get divorced? ",
  answer: "three"
}

queB = {
  question: "Who was the maid of honor at Monica’s wedding? ",
  answer: "Rachel"
}
queC = {
  question: " Phoebe’s scientist boyfriend David worked in what city? ",
  answer: "Minsk"
}
queD = {
  question: " Which Sprouse brother played Ross’ son Ben? ",
  answer: "Cole"
}
queE = {
  question: "True or false, Rachel kissed all of her Friends (male and female) on the show? ",
  answer: "True"
}

arrayList = [queA, queB, queC, queD, queE];

for(i=0; i<arrayList.length; i++){
  var list = arrayList[i];
  friendsQuiz((chalk.hex('#441ED4').italic.bold(list.question)), 
  list.answer)
}

console.log(chalk.white.bgBlack.bold("Your total score is: " + score));
