//setting basic variables
var canvasWidth = 1000;
var canvasHeight = 300;
var Dice = [];
var numDice = 1;
var dieSpace = 125;
var points = 0;
var loosingNum = Math.floor( 1 + (Math.random() * 5)); //this variable holds the result of the die roll
var ch;
var gameOver = false;
var ctx = document.getElementById("canvas").getContext('2d'); //canvas
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
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  let scoreToAdd = 0;
  for(let i=0; i<Dice.length; i++){
    ch = Math.floor( 1 + (Math.random() * 6));
    gameOver = ch == loosingNum;
    scoreToAdd += ch;
    drawDots(ch, Dice[i]);
  }
  if(!gameOver){
  loosingNum = Math.floor( 1 + (Math.random() * 6));
  document.getElementById("avoid").innerHTML = loosingNum;
  points += scoreToAdd;
  document.getElementById("points").innerHTML = points;
  } else{
    alert("your score is " + points);
    location.reload();
  }

}

function addDie(){
  if(numDice < 5){
    numDice +=1;
    document.getElementById("numDice").innerHTML = numDice;
    createDie(50 + (numDice * dieSpace) - dieSpace,50,100,100,10);
  } else{
    alert("you have the max amount of dice");
  }
}

function removeDie(){
  if(numDice > 1){
    Dice.pop();
    numDice -=1;
    document.getElementById("numDice").innerHTML = numDice;
  } else{
    alert("you have the minimum amount of dice");
  }
}

//this function is responsable for drawing the dots on a die it takes a number so amount of dots and the die so it knows where to draw it.
function drawDots(num, die){
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
    draw4(die);
    draw2mid(die);
    break;
}
  
}


createDie(50,50,100,100,10);


  


