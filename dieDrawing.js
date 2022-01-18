function draw1(die){
    let dotX;
    let dotY;
    dotX = Dice[die].x + 0.5*Dice[die].width;
    dotY = Dice[die].y + 0.5*Dice[die].height;
    ctx.beginPath();
    fullCircle(dotX,dotY,Dice[die].dotRad);
    ctx.closePath();
    ctx.fill();
}

function draw2(die){
    let dotX = Dice[die].x + 5*Dice[die].dotRad;
    let dotY = Dice[die].y + 5*Dice[die].dotRad;
    ctx.beginPath();
    fullCircle(dotX,dotY,Dice[die].dotRad); 
    dotX = Dice[die].x+Dice[die].width-3*Dice[die].dotRad;
    dotY = Dice[die].y+Dice[die].height-3*Dice[die].dotRad;
    fullCircle(dotX,dotY,Dice[die].dotRad); 
    ctx.closePath();
    ctx.fill();
}


setInterval(dieThrow, 1000);




