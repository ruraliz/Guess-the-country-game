const game = document.getElementById('game');
const fly= document.getElementById('airplane');
const cash= document.getElementById('cash');


let playerSelector= fly;
let playerStatus = true;

let land;

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

image1.style.display= 'block';
setTimeout(function(){
    image1.style.display= 'none';
image2.style.display= 'block'
setTimeout(function(){
    image2.style.display= 'none'
image3.style.display= 'block'
setTimeout(function(){
    image3.style.display= 'none'
image4.style.display= 'block'
setTimeout(function(){
    image4.style.display= 'none'
image5.style.display= 'block'
 setTimeout(function(){
    image5.style.display= 'none'
image6.style.display= 'block'
setTimeout(function(){
    image6.style.display= 'none'
image7.style.display= 'block'
setTimeout(function(){
    image7.style.display= 'none'
image8.style.display= 'block'
setTimeout(function(){
    image8.style.display= 'none'
image9.style.display= 'block'
setTimeout(function(){
    image9.style.display= 'none'
image10.style.display= 'block'
setTimeout(function(){
    image10.style.display= 'none'
image11.style.display= 'block'
setTimeout(function(){
    image11.style.display= 'none'
image12.style.display= 'block'
setTimeout(function(){
    image12.style.display= 'none'
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


//airplane
class Selector{
    constructor(x,y,width,height) {
        this.x = x
        this. y = y
        this.width = width
        this.height = height
        this.alive = true
    }
    render() {
        ctx.drawImage(fly, this.x, this.y, this.width, this.height)
    }
}

//Event listener
window.addEventListener('DOMContentLoaded', function(){
    land= new Selector(100, 100, 25, 25);
});
document.addEventListener('keydown', movementHandler);

//Key controls
function movementHandler(e) {
    switch(e.key){
        case'ArrowUp':
        land.y-10 >= 0 ? (land.y -= 10) : null; 
        break;
        case 'ArrowLeft':
         land.x - 10 >= 0 ? (land.x -= 10) : null;
            break;
        case 'ArrowDown':
            land.y + 10 <= game.height ? (land.y += 10) : null;
             break;
        case 'ArrowRight' :
            land.x +10 <= game.width ? (land.x += 10) : null;
            break;
            case'w':
        land.y-10 >= 0 ? (land.y -= 10) : null; 
        break;
        case 'a':
         land.x - 10 >= 0 ? (land.x -= 10) : null;
            break;
        case 's':
            land.y + 10 <= game.height ? (land.y += 10) : null;
             break;
        case 'd' :
            land.x +10 <= game.width ? (land.x += 10) : null;
            break;


    }
}
//detection of flag collision 
function detectFalg(arrow, flag){

}


//Input correct answer 


//Start page 

//mutiple choice

const choiceOneLabel = document.getElementById('choice-1-label').next();
const choiceTwoLabel = document.getElementById('choice-2-label').next();
const choiceThreeLabel = document.getElementById('choice-3-label').next();
const choiceFourLabel = document.getElementById('choice-4-label').next();
if(image1.style.display='block'){
    choiceOneLabel.textContent= 'France'
    choiceTwoLabel.textContent= 'Belgium'
    choiceThreeLabel.textContent= 'Tunisia'
    choiceFourLabel.textContent= 'Chile'
}else if(image2.style.display='block'){
    choiceTwoLabel.textContent= 'Greece'
    choiceThreeLabel.textContent= 'Tunisia'
    choiceFourLabel.textContent= 'Burundi'
}else if(image3.style.display='block'){
    choiceOneLabel.textContent= 'Togo'
    choiceTwoLabel.textContent= 'France'
    choiceThreeLabel.textContent= 'Kenya'
    choiceFourLabel.textContent= 'Cuba'
}else if(image4.style.display='block'){
        choiceOneLabel.textContent= 'Thailand'
        choiceTwoLabel.textContent= 'Belgium'
        choiceThreeLabel.textContent= 'Denmark'
        choiceFourLabel.textContent= 'Chile'
}else{
    window.alert('Play Again?')
}



//grab answer


   function correctAnswer(){
        if(image1.style.display= 'block' && choiceTwo.checked === true){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image2.style.display= 'block' && answer.value === 'Burundi'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image3.style.display= 'block' && answer.value === 'Cuba'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image4.style.display= 'block' && answer.value === 'Denmark'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image5.style.display= 'block' && answer.value === 'France'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image6.style.display= 'block' && answer.value === 'Kenya'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image7.style.display= 'block' && answer.value === 'Lithuania'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image8.style.display= 'block' && answer.value === 'Morocco'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image9.style.display= 'block' && answer.value === 'Puerto Rico'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image10.style.display= 'block' && answer.value === 'Rwanda'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image11.style.display= 'block' && answer.value === 'Thailand'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else if(image12.style.display= 'block' && answer.value === 'Togo'){
            window.alert('Correct');
            let newCash= Number(cash.textContent) + 50;
            cash.textContent= newCash;
        } else{
            window.alert('Try again')
            let newCash= Number(cash.textContent) - 50;
            cash.textContent= newCash;
        }
    }
    


//sound
