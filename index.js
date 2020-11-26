var readlineSync = require("readline-sync");

var score = 0;
var scoree = 0;
var scoreee = 0;
{


var userName = readlineSync.question("Welcome to Mirzapur Quiz! Aapka Naam?"); 

console.log("Lets start the game!" + "All the Best " + userName ) 

console.log(" ");

console.log("Each right answer gives 2 points and wrong one deduces 1 point. Score minimum 3 points to play level 2")
console.log(" ");
console.log("Go for it :)");

console.log("----------------------------");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log(" ");
    console.log("Well Done, " + userName + "! Mirzapur me aag laga daale");
    // console.log("yeh lo, aapke 2 points :)"); 
    score = score + 2;
    console.log("Score: ", score);
  } else {
    console.log(" ");
    console.log("Hmm, that's Wrong!");
    score = score - 1;
    console.log(" ");
    // console.log("protocol hai bhai, 1 point cut karna padta. Kuch bhi nakko samjho dekho. Agle question me aag daalo khaali");
    console.log("Score: ", score);
  }
  console.log("-----------------")
}

var questions = [{
  question: "Tripathi Ke Pehle Kin Logon Ka Raaj Tha Mirzapur Pe?   a:Choudhary ka   b:Tiger Shah ka   c:Ramakanth Singh ka   d:Maurya ka   Answer: ",
  answer: "a",
},{ question: "How many eggs does Guddu Bhaiyya eat in Season 1?   a: 50   b:30   c:20   d:40   Answer: ",
  answer: "a"
}, {
  question: "Who kills Rati Shankar Shukla?   a:Bablu   b:Guddu   c:Munna   d:Compounder   Answer: ",
  answer: "b",
}, {
  question:"What was Lala supplying to Kaleen Bhaiyya?   a:Guns   b:Weed   c:Opium   d:Buttermilk   Answer: ",
  answer: "c",
}]


for (i=0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer);
}

if (score === 8) {
  console.log("Wow! Perfect score");
}
if (score === 5) {
  console.log("Well done, just 3 points short of a perfect score!")
}
if (score >= 3) {
  console.log("Congratulations! You are entering level 2!")
  console.log(" ");
  console.log("In this level, you get 3 points for correct answer and -2 for a wrong answer. Make sure to type the first letter of your answer in Capital letters"); 
  console.log("Phod do! ATB " + userName );
  console.log("----------------")
  function questionLevelTwo(questionTwo,answerTwo) {
  var userAnswerTwo = readlineSync.question(questionTwo);
  if (userAnswerTwo === answerTwo) {
    console.log(" ");
    console.log("Well done " + userName + ". Kaleen Bhaiya Khush hue!");
    console.log("aur aapko 3 KATTE dere. Sweekar karlo (Head Nod)");
    scoree = scoree + 3;
    console.log("Score: ", scoree);
  } else {
    console.log(" ");
    console.log("Panditji not happy with your answer");
    scoree = scoree - 2;
    console.log(" ");
    console.log("Minus 2 toh karna padega!");
    console.log("Score: ", scoree);
  }
  console.log("-----------------")
}

var questionsTwo = [
  {
    questionTwo: "Middle class aadmi, aadmi nahi _______ hota hai.   Answer: ",
    answerTwo: "Chutiya",
  }, {
    questionTwo: "Neta banna hai toh ______ paalo. Gundey mat bano.   Answer: ",
    answerTwo: "Gundey",
  }, {
    questionTwo: "Attack me bhi gun, defense me bhi gun, Hum banayenge Mirzapur ko _______!   Answer: ",
    answerTwo: "America",
  }, {
    questionTwo: "Ab chahe saanp aake ghar mein dosti karle… Rehta toh Zehreela hi hai na. Who said this?   a:Guddu   b:Bauji   Answer: ",
    answerTwo: "a",
  }
  // , {
  //   question: "Hum hai Rajneta, _____ banana humara kaam hai",
  //   answer: "Chutiya",
  // }, { 
  //   question: "Hum hain rajneta, ______ banana humara kaam hai",
  //   answer: "Chutiya",
]

for (i=0; i < questionsTwo.length; i++) {
  var currentquestionTwo = questionsTwo[i];
  questionLevelTwo(currentquestionTwo.questionTwo,currentquestionTwo.answerTwo);
  
} 
} else {
  console.log("well tried " + userName + ", But your score doesn't let you play level-2. ")
  console.log("Phirse bingewatch?") 
  
  } 
  console.log("--------------------------------");
console.log("Final Score: LevelOne + LevelTwo = ", score + scoree); 
} 
  
var bonusQues = readlineSync.question("press 'y' if you want to play bonus question for 10 points. Beware: a wrong answer can take away 3 points from current score! Lekin ukw RISK hai toh ISHQ hai. Khelna Chahte ho?")


if (bonusQues === "y") {
  console.log("Okay, let's get this!");
  scoreee = scoreee + 5;
}
 else {
  console.log("Nice Play, Just some gyan from Bauji - Jeet ki guarantee tabhi hai jab jeet aur haar dono tumhare control mein ho"
) 
}



function bonusQuestion(bonusquestion,bonusanswer) {
  var useranswerBonus = readlineSync.question(bonusquestion);

  if (useranswerBonus = bonusanswer) {
    console.log("CONGRATULATION!! you scored +10")
    scoreee = scoreee + 5 
    console.log("GRAND SCORE: ", score + scoree + scoreee)
  } else {
    console.log("Good Try but sorry! It's -3 for you");
    scoreee = scoreee - 3;
    console.log("Final Score: ", score + scoree + scoreee);
  }
}

bonusQuestion("Which year was the show Mirzapur first aired?", "2018"); 


var leaderboard = readlineSync.question("To see leaderboard, type capital 'L' ") 
  if (leaderboard === "L") {
    console.log("----------------------------------------")
    console.log("HIGH SCORERES: ")
    console.log(" ")
    console.log("1. Amaan: ", "28");
    console.log("2. RoboKing ", "26");
    console.log("3. Rayaan: ", "25");
  } else {
    console.log("Okay, Bye! take care.");
  }



