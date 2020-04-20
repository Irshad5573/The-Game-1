                                                                                                                                      var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400,400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=0;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(100,100,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-10;
  }
  
  
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+10;
  }

if(keyDown("SPACE"))
{
   start();
}
  
  ball.bounceOff(paddle);
  
  if(ball.x > 400 ) {

  text("GAME OVER",150,200);  
  paddle.velocityY=0;
  }
 
  drawSprites();
  
}

function start() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

