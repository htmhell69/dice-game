//define variables
var canvasHeight = 300;
var canvasWidth = 400;
var Dice = [];

//random functions
function randomInt(max){
    return 1+Math.floor(Math.random() * max);
}

function fullCircle(x,y,size){
    ctx.beginPath();
    ctx.arc(x,y, size, 0, 2*Math.PI,true);
    ctx.closePath();
    ctx.fill();
}

//game functions
function createDieObject(x,y,height,width, dotRad){
    let Die = {
        x: x,
        y: y,
        width: width,
        height: height,
        dotRad: dotRad
    };
    Dice.push(Die);
}

function dieThrow(){
    for(let i=0; i<Dice.length; i++){
    let result = randomInt(2);
    dieFaceDraw(result, i);
    }
}

function dieFaceDraw(numOfDots, die){
    ctx = document.getElementById("canvas").getContext("2d");
    ctx.lineWidth = 5;
    ctx.clearRect(Dice[die].x,Dice[die].y,Dice[die].width,Dice[die].height);
    ctx.fillStyle = "#3498DB";
    switch(numOfDots){
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
        case 6:
            draw4(die);
            draw2Mids(die);
            break;
    }
}

createDieObject(50,50,50,50,10);
createDieObject(100,100,50,50,10);
setInterval(dieThrow, 5);







