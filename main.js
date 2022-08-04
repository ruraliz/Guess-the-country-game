const game = document.getElementById('game');
const cash= document.getElementById('cash');

const computedStyle = getComputedStyle(game);
const height = computedStyle.height;
const width= computedStyle.width;

const ctx= game.getContext('2d')

game.setAttribute('height', getComputedStyle(game)['height'])  
game.setAttribute('width', getComputedStyle(game)['width']);

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
const gameOver= document.getElementById('gameover-screen')


function gameStart(){
image1.style.display= 'block';
setTimeout(function(){
    choiceOneLabel.textContent= 'Denmark'
    choiceTwoLabel.textContent= 'Greece'
    choiceThreeLabel.textContent= 'Tunisia'
    choiceFourLabel.textContent= 'Burundi'
    image1.style.display= 'none';
image2.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Togo'
    choiceTwoLabel.textContent= 'France'
    choiceThreeLabel.textContent= 'Kenya'
    choiceFourLabel.textContent= 'Cuba'
    image2.style.display= 'none'
image3.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Thailand'
    choiceTwoLabel.textContent= 'Belgium'
    choiceThreeLabel.textContent= 'Denmark'
    choiceFourLabel.textContent= 'Chile'
    image3.style.display= 'none'
image4.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'France'
    choiceTwoLabel.textContent= 'Belgium'
    choiceThreeLabel.textContent= 'England'
    choiceFourLabel.textContent= 'South Korea'
    image4.style.display= 'none'
image5.style.display= 'block'
 setTimeout(function(){
    choiceOneLabel.textContent= 'Brazil'
    choiceTwoLabel.textContent= 'Kenya'
    choiceThreeLabel.textContent= 'South Africa'
    choiceFourLabel.textContent= 'Qatar'
    image5.style.display= 'none'
image6.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Lithuania'
    choiceTwoLabel.textContent= 'India'
    choiceThreeLabel.textContent= 'Senegal'
    choiceFourLabel.textContent= 'Rwanda'
    image6.style.display= 'none'
image7.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Tanzania'
    choiceTwoLabel.textContent= 'Haiti'
    choiceThreeLabel.textContent= 'Australia'
    choiceFourLabel.textContent= 'Morocco'
    image7.style.display= 'none'
image8.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Rusia'
    choiceTwoLabel.textContent= 'Puerto Rico'
    choiceThreeLabel.textContent= 'Ireland'
    choiceFourLabel.textContent= 'Jordan'
    image8.style.display= 'none'
image9.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Somalia'
    choiceTwoLabel.textContent= 'Rwanda'
    choiceThreeLabel.textContent= 'Ukraine'
    choiceFourLabel.textContent= 'Philippines'
    image9.style.display= 'none'
image10.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Costa Rica'
    choiceTwoLabel.textContent= 'China'
    choiceThreeLabel.textContent= 'France'
    choiceFourLabel.textContent= 'Thailand'
    image10.style.display= 'none'
image11.style.display= 'block'
setTimeout(function(){
    choiceOneLabel.textContent= 'Sweden'
    choiceTwoLabel.textContent= 'India'
    choiceThreeLabel.textContent= 'Togo'
    choiceFourLabel.textContent= 'Chad'
    image11.style.display= 'none'
image12.style.display= 'block'
setTimeout(function(){
    image12.style.display= 'none'
gameOver.style.display='block'
clearInterval(gameStart)
setTimeout(function(){
    alert('Game Over')

},1000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);
},4000);

}
gameStart()





//Input correct answer 


//Start page 

//mutiple choice
const choiceOne = document.getElementById('choice-1');
const choiceTwo = document.getElementById('choice-2');
const choiceThree = document.getElementById('choice-3');
const choiceFour = document.getElementById('choice-4');
const choiceOneLabel = document.getElementById('choice-1-label');
const choiceTwoLabel = document.getElementById('choice-2-label');
const choiceThreeLabel = document.getElementById('choice-3-label');
const choiceFourLabel = document.getElementById('choice-4-label');

//When game ends 


//grab answer
   function correctAnswer(){
        if(image1.style.display= 'block' && answer.value === 'Belgium'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image2.style.display= 'block' && choiceFourLabel.checked === true ){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image3.style.display= 'block' && choiceFour.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image4.style.display= 'block' && choiceThree.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image5.style.display= 'block' && choiceOne.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image6.style.display= 'block' && choiceTwo.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image7.style.display= 'block' && choiceOne.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image8.style.display= 'block' && choiceFour.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image9.style.display= 'block' && choiceTwo.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image10.style.display= 'block' && choiceTwo === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image11.style.display= 'block' && choiceFour.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image12.style.display= 'block' && choiceThree.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else{
            window.alert('Try again')
            let newCash= Number(cash.textContent) - 50;
            cash.textContent= newCash;
        }
    }
    


//Timer

var seconds=4;
var counter = null;

function reset_timer()
{
    seconds= 4;
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
 //end game

 //function gameEnd(){
   // gameStart(function(){
   //    gameOver.style.display= 'block'; 
        //console.log('done')
   // })
 //}
 //gameEnd();


 