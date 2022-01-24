function draw1(die){
  ctx.beginPath();
  let dotX = die.x + .5*die.width;
  let dotY = die.y + .5*die.height;
  ctx.arc(dotX,dotY,die.dotSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function draw2(die){
  alert(2);
  ctx.beginPath();
  let dotX = die.x + (3*die.dotSize);
  let dotY = die.y + (3*die.dotSize);
  ctx.arc(dotX,dotY,die.dotSize,0,Math.PI*2);
  dotX = die.x + die.width - (3*die.dotSize);
  dotY = die.y + die.height - (3*die.dotSize);
  ctx.arc(dotX,dotY,die.dotSize,0,Math.PI*2);
  ctx.closePath();
  ctx.fill();
}





