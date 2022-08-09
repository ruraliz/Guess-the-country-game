# Guess-the-country-game

Steps to install on local computer

Go to [repo](https://github.com/ruraliz/Guess-the-country-game.git
) on Github profile
`fork` and `clone` repo
Clone to local machine

Otherwise 

You can also go to repository and go to setting/pages- click on link to access [game]
(https://ruraliz.github.io/Guess-the-country-game/)

## 

Languagges used 

| Language           | functionality |
| -----------         | ----------- |
| `JavaScript`       |control functionality of the game , timing, score tally, playe's guess, etc|
| `CSS` |design the game, visuals, color schemes, flag placement|
| `HTML`           | control game fundations, buttons, radio inputs and structure of game as a whole |


##

Approach taken


My game is a guessing game, the player is given 10 seconds to guess the name of the country by the country's flag. At the end of the game they can add their name to a highscores list. 


The code snippet bellow is the structure of the game timing. 


```javascript 
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

```

##
Functionality of correct guesses were structured by the code snippet below in JavaScript 


```javascript
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
```


##


Another important part of the game for the player is getting on highscore list, the code snippet bellow shows how I was able to make the list and limit it to 5 high score.


``` javascript
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

```


##
Wireframe

<img width="481" alt="Screen Shot 2022-07-26 at 9 59 30 PM" src="https://user-images.githubusercontent.com/107972391/181172977-dfe361eb-3098-46fb-a695-024b31c33626.png">


Game rules

<img width="443" alt="Screen Shot 2022-07-26 at 9 59 37 PM" src="https://user-images.githubusercontent.com/107972391/181173014-e92f3c1f-a120-41e0-a4e9-1f44e4f26e04.png">

##
Actual Game


At the home screen of the game, there is an option to read instructions and Start button to start playing the game. 
<img width="1302" alt="Screen Shot 2022-08-05 at 11 01 41 PM" src="https://user-images.githubusercontent.com/107972391/183236720-e00bb62f-9298-4a98-9c01-05391be412df.png">



To play the game, guess the country name by flag and submit


<img width="1281" alt="Screen Shot 2022-08-05 at 11 01 56 PM" src="https://user-images.githubusercontent.com/107972391/183236744-dd92a13c-d66a-4285-af33-d6d22f352b8e.png">
<img width="1174" alt="Screen Shot 2022-08-05 at 11 02 04 PM" src="https://user-images.githubusercontent.com/107972391/183236746-23f9457c-703f-46d0-a02d-b4f1e6766ca3.png">


##
Instructions

<img width="316" alt="Screen Shot 2022-08-05 at 11 01 49 PM" src="https://user-images.githubusercontent.com/107972391/183236722-dfc1083a-d6bb-429c-bf31-1a43a8a10a95.png">



Submit your score and name at end of the game to make it to high score list 



<img width="921" alt="Screen Shot 2022-08-05 at 11 07 03 PM" src="https://user-images.githubusercontent.com/107972391/183236771-d22b53e4-b091-4ef1-819c-23c3dbedcfe8.png">

##
Future Improvements


Given more time I would improve the game by implementing:


- A way that if the player guesses correctly they can move on to next flag 
- The radio input selection rolls over to the next round of guesses because of the way the codes are structured in javascript, I would write them in a way to prevent this from happening. 
- Since the player can click on answer multiple times a rack-up points, I would find way to disable that
- Have the flags/multiple-Choices show-up in a random fashion in a loop, each appearing in a specific spot on the screen. 


