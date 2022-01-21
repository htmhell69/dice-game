function draw1(die){
  let ctx = document.getElementById("canvas").getContext('2d');
  alert(1);
  ctx.beginPath();
  let dotX = die.x + .5*die.width;
  let dotY = die.y + .5*die.height;
  ctx.arc(dotX,dotY,die.dotSize,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}





