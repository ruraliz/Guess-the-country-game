const game = document.getElementById('game');
const fly= document.getElementById('airplane');
const cash= document.getElementById('top-left');

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

window.setTimeout("document.getElementById('flag1').style.display='block';", 0)
window.setTimeout("document.getElementById('flag2').style.display='block';", 1000)
window.setTimeout("document.getElementById('flag3').style.display='block';", 20000)







//arrow
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
         land.x - 10 >= 0 ? (arrow.x -= 10) : null;
            break;
        case 's':
            land.y + 10 <= game.height ? (arrow.y += 10) : null;
             break;
        case 'd' :
            land.x +10 <= game.width ? (arrow.x += 10) : null;
            break;


    }
}
//detection of flag collision 
function detectFalg(arrow, flag){

}
//default value- hidden 
//different set timeout
    //inside 