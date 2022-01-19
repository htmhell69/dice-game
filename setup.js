//setting basic variables
var canvasWidth = 400;
var canvasHeight = 300;
var Dice = [];
var ch;
//creating functions
function createDie(x, y, height, width, dotSize){
  let die = {
    x: x,
    y: y,
    height: height,
    width: width,
    dotSize: dotSize
  }
  
  Dice.push(die);
} 

function rollDie(){
  for(let i=0; i<Dice.length; i++){
    ch = 1+Math.floor(Math.random()*6);
    drawDots(ch, Dice[i]);
  }
}

function drawDots(num, die){
  var ctx = document.getElementById("canvas").getContext('2d');
    ctx.lineWidth = 5;
    ctx.clearRect(die.x,die.y,die.width,die.height);
    ctx.strokeRect(die.x,die.y,die.width,die.height);
    ctx.fillStyle = "#009966";
}


createDie(50,50,100,100,50);
rollDie();
  


