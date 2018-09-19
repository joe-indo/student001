var cvs = document.getElemntById("canvas");
var ctx = cvs.getContext("2d");
var spaceship = new Image();
var backgA = new Image();
var floor = new Image();
var north = new Image();
var south = new Image();   
var fg = new Image();

spaceship.src = "images/spaceship.png";
backA.src = "images/backg.png";
fg.src = "images/floor1.png";
north.src = "images/up1.png";
south.src = "images/up2.png";

var gap = 85;
var constant = north.height + gap;

var sX = 15
var sY = 150

var gravity = 1.5;


document.addEventListener("keydown",moveUp);
function moveUp() {       
        sY-= 25;
    }
   var bricks = [];

       bricks [0] = {
       x:cvs.width,
       y:0,
   };


function draw (){
  ctx.drawImage(backgA,0,0);
    for (var i=0; i < bricks.length; i++){
  ctx.drawImage(north,bricks[i].x,bricks[i].y);
  ctx.drawImage(south,bricks[i].x,bricks[i].y+constant);

  bricks[i].x--;

  if(bricks[i].x== 125){
  	bricks.push({
  	   x : cvs.width,
  	   y : Math.floor(Math.random()*north.height)- north.height
  
         });
    }
}

      if(sX + spaceship.width >= bricks[i].x && sX <= bricks[i].x + north.width
      	&& sY <= bricks[i].y + north.height || sY + spaceship.height >=
      	bricks[i].y+constant || sY + spaceship.height >= cvs.height - fg.height){
      	location.reload();
  }
     if (bricks[i].x == 5){

     }

  ctx.drawImage(fg,0,cvs.height - fg.height);
  ctx.drawImage(spaceship,sX,sY);
   
   sY += gravity;
   ctx.fillStyle = "#000";
   ctx.font = "20px Verdana";
   ctx.fillText("Score:" + score,10,cvs.height-20);
 requestAnimationFrame(draw);






}
draw();