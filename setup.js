//setting basic variables
var canvasWidth = 400;
var canvasHeight = 300;
var Dice = [];
//this variable holds the result of the die roll
var ch;

//creating functions

//this function creates a die object and puts it in the Dice array
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

//this function gets a random number 1-6 then calls the draw function. It does this for each die object in the Dice array
function rollDie(){
  for(let i=0; i<Dice.length; i++){
    ch = 1;
    drawDots(ch, Dice[i]);
  }
}

//this function is responsable for drawing the dots on a die it takes a number so amount of dots and the die so it knows where to draw it.
function drawDots(num, die){
  let ctx = document.getElementById("canvas").getContext('2d');
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


createDie(50,50,100,100,10);
  


