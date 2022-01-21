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
    ch = 1;
    drawDots(ch, Dice[i]);
  }
}

function drawDots(num, die){
  var ctx = document.getElementById("canvas").getContext('2d');
  ctx.lineWidth = 5;
  ctx.clearRect(die.x,die.y,die.width,die.height);
  ctx.strokeRect(die.x,die.y,die.width,die.height);
  ctx.fillStyle = "#009966";
  switch(num) {
  case 1:
    draw1(die);
    break;
  case 2:
    draw2(die);
    break;
  case 3:
   draw2(die);
   draw1(die);
   break;
  case 4:
    draw4(die);
    break;
  case 5:
    draw4(die);
    draw1(die);
    break; 
  default:
    draw4();
    draw2mid();
    break;
}
  
}


createDie(50,50,100,100,50);
rollDie();
  


