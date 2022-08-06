const game = document.getElementById("game");
const cash= document.getElementById('cash');
const playerName= document.getElementById('player_name');
const saveScoreBtn= document.getElementById("submit_score");
const mostRecentScore= document.getElementById('mostRecentScore')
const finalScore= document.getElementById("finalScore")
const highestScores= document.getElementById('highScores')

//flags set timeout
const image1= document.getElementById('flag1')
const image2= document.getElementById('flag2')
const image3= document.getElementById('flag3')
const image4= document.getElementById('flag4')
const image5= document.getElementById('flag5')
const image6= document.getElementById('flag6')
const image7= document.getElementById('flag7')
const image8= document.getElementById('flag8')
const image9= document.getElementById('flag9')
const image10= document.getElementById('flag10')
const image11= document.getElementById('flag11')
const image12= document.getElementById('flag12')
const timing= document.getElementById('seconds')
const answer= document.getElementById('answer')


const questions= document.getElementById("multiple-choice");
const gameOver= document.getElementById('gameover-screen')
const ctx= game.getContext('2d')
//mutiple choice
const choiceOne = document.getElementById('choice-1');
const choiceTwo = document.getElementById('choice-2');
const choiceThree = document.getElementById('choice-3');
const choiceFour = document.getElementById('choice-4');
const choiceOneLabel = document.getElementById('choice-1-label');
const choiceTwoLabel = document.getElementById('choice-2-label');
const choiceThreeLabel = document.getElementById('choice-3-label');
const choiceFourLabel = document.getElementById('choice-4-label');

image1.style.display= 'block';
setTimeout(function(){ 
    choiceOneLabel.textContent= 'Denmark'
    choiceTwoLabel.textContent= 'Greece'
    choiceThreeLabel.textContent= 'Tunisia'
    choiceFourLabel.textContent= 'Burundi'
    image1.style.display= 'none';
image2.style.display= 'block' 
},10000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Togo'
    choiceTwoLabel.textContent= 'France'
    choiceThreeLabel.textContent= 'Kenya'
    choiceFourLabel.textContent= 'Cuba'
    image2.style.display= 'none'
image3.style.display= 'block'
},20000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Thailand'
    choiceTwoLabel.textContent= 'Belgium'
    choiceThreeLabel.textContent= 'Denmark'
    choiceFourLabel.textContent= 'Chile'
    image3.style.display= 'none'
image4.style.display= 'block'
},30000);
setTimeout(function(){
    choiceOneLabel.textContent= 'France'
    choiceTwoLabel.textContent= 'Belgium'
    choiceThreeLabel.textContent= 'England'
    choiceFourLabel.textContent= 'South Korea'
    image4.style.display= 'none'
image5.style.display= 'block'
},40000);
 setTimeout(function(){
    choiceOneLabel.textContent= 'Brazil'
    choiceTwoLabel.textContent= 'Kenya'
    choiceThreeLabel.textContent= 'South Africa'
    choiceFourLabel.textContent= 'Qatar'
    image5.style.display= 'none'
image6.style.display= 'block'
},50000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Lithuania'
    choiceTwoLabel.textContent= 'India'
    choiceThreeLabel.textContent= 'Senegal'
    choiceFourLabel.textContent= 'Rwanda'
    image6.style.display= 'none'
image7.style.display= 'block'
},60000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Tanzania'
    choiceTwoLabel.textContent= 'Haiti'
    choiceThreeLabel.textContent= 'Australia'
    choiceFourLabel.textContent= 'Morocco'
    image7.style.display= 'none'
image8.style.display= 'block'
},70000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Rusia'
    choiceTwoLabel.textContent= 'Puerto Rico'
    choiceThreeLabel.textContent= 'Ireland'
    choiceFourLabel.textContent= 'Jordan'
    image8.style.display= 'none'
image9.style.display= 'block'
},80000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Somalia'
    choiceTwoLabel.textContent= 'Rwanda'
    choiceThreeLabel.textContent= 'Ukraine'
    choiceFourLabel.textContent= 'Philippines'
    image9.style.display= 'none'
image10.style.display= 'block'
},90000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Costa Rica'
    choiceTwoLabel.textContent= 'China'
    choiceThreeLabel.textContent= 'France'
    choiceFourLabel.textContent= 'Thailand'
    image10.style.display= 'none'
image11.style.display= 'block'
},100000);
setTimeout(function(){
    choiceOneLabel.textContent= 'Sweden'
    choiceTwoLabel.textContent= 'India'
    choiceThreeLabel.textContent= 'Togo'
    choiceFourLabel.textContent= 'Chad'
    image11.style.display= 'none'
image12.style.display= 'block'
},110000);
setTimeout(function(){
    image12.style.display= 'none'
},120000);
questions.style.display='block'
setTimeout(function(){
    alert('Game Over')
    questions.style.display='none'
    timing.style.display='none'
    answer.style.display='none'
gameOver.style.display='block'
highestScores.style.display='block'
},121000);



//grab answer
  function correctAnswer(){
        if(image1.style.display!='none' && choiceTwo.checked){
            console.log('correct')
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
         }else if (image2.style.display!='none' && choiceFour.checked){
            console.log('correct')
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image3.style.display!='none' && choiceFour.checked){
            console.log('correct')
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image4.style.display!='none' && choiceThree.checked){
            console.log('correct')
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image5.style.display!='none' && choiceOne.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image6.style.display!='none' && choiceTwo.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image7.style.display!='none' && choiceOne.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image8.style.display!='none' && choiceFour.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image9.style.display!='none' && choiceTwo.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image10.style.display!='none' && choiceTwo.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image11.style.display!='none' && choiceFour.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        }else if(image12.style.display!='none' && choiceThree.checked){
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else{
            console.log('wrong')
            let newCash= Number(cash.textContent) - 50;
            cash.textContent= newCash;
        }
        console.log(cash.textContent)
        localStorage.setItem('mostRecentScore', Number(cash.textContent))

    }


//Timer

var seconds=9;
var counter = null;

function reset_timer()
{
    seconds= 10;
    counter=setInterval(timer, 1000); 
}

reset_timer();

function timer()
{
  seconds--;
  if (seconds <= 0)
  {
    clearInterval(counter);
    setTimeout(reset_timer, 0);
    return;
   }

 document.getElementById("seconds").innerHTML="Time Left " + seconds; 
 }
 //score tally
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText= mostRecentScore;

playerName.addEventListener('keyup',()=>{
    saveScoreBtn.disabled = !playerName.value;
});

saveHighScore = e=> {
    console.log('clicked the submit score button!');
    e.preventDefault();
const score= {
    score: Number(cash.textContent),
    name:playerName.value
}
highScores.push(score);
highScores.sort((a,b) => b.score - a.score);  //if there is new score replaces old score
highScores.splice(5)  //cut off list at 5 players 

localStorage.setItem('highScores', JSON.stringify(highScores));
console.log(highScores);
};

const highScoresList= document.getElementById("highScoresList");
const highScoresShow= JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML= highScoresShow.map(score =>{
    return `<li class='high-score'>${score.name}-${score.score}</li>`;
})
.join("")

 