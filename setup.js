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
    alert("dierolled");
  }
}

function drawDots(num, die){
  var ctx = document.getElementById("canvas").getContext('2d');
  ctx.lineWidth = 5;
  ctx.clearRect(die.x,die.y,die.width,die.height);
  ctx.strokeRect(die.x,die.y,die.width,die.height);
  ctx.fillStyle = "#009966";
  switch(num){
    case 1:
    draw1();
    break;
    
    case 2:
    draw2();
    break;
    
    case 3:
    draw2();
    draw1();
    break;
    
    case 4:
    draw4();
    break;
      
    case 5:
    draw4();
    draw1();
    break;
    
    case 6:
    draw4();
    draw2mid();
    break;    
  }
  
}


createDie(50,50,100,100,50);
rollDie();
  


