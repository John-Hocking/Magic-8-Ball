
const button = document.getElementById("button");
const input = document.getElementById("input");
let answer = document.getElementById("answer");
const eight = document.getElementById("eight");
const submitAnswer = document.getElementById('submit-answer')

button.addEventListener("click", getAnswer);
submitAnswer.addEventListener("submit", getAnswer);

function getAnswer(e){
  let answerList = [
    'It is certain',
    'It is decidedly so',
     'Without a doubt',
     'Yes - definitely',
     'You may rely on it',
     'As I see it, yes',
    ' Most likely',
     'Outlook good',
    'Yes',
     'Signs point to yes',
     'Reply hazy, try again',
     'Ask again later',
     'Better not tell you now',
     'Cannot predict now',
     'Concentrate and ask again',
     "Don't count on it",
     'My reply is no',
     'My sources say no',
     'Outlook not so good',
     'Very doubtful'
  ]
  let answerIndex = Math.floor(Math.random() * 20)
  eight.innerText = ''
  answer.innerText = answerList[answerIndex];
  e.preventDefault()
}





