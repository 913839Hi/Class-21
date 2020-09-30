var fixedRect, movingRect;
var thing1,thing2;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  thing1=createSprite(600,100,20,60);
  thing1.shapeColor="blue";
  thing2=createSprite(600,700,80,100);
  thing2.shapeColor="blue";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  fixedRect.velocityY = +5;
  thing2.velocityY=-4;
  thing1.velocityY=4;
}

function draw() {
  background(0,0,0);  
bounceOff(thing1,thing2);

movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
  drawSprites();
}

