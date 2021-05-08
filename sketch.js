var bow , arrow,  scene, rballoon, gballoon, pballoon, blballoon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup(){
  createCanvas(400,400)
   scene = createSprite(200,200,400,400)
  scene.addImage(backgroundImage)
  scene.scale = 1.5
  bow = createSprite(360,200,10,10)
  bow.addImage(bowImage)
  arrowStorm = createGroup()
  redBalloon = createGroup()
  greenBalloon = createGroup()
  pinkBalloon = createGroup()
  blueBalloon = createGroup()
 
}
function draw(){
  background("white")
  scene.velocityX = -5
  if(scene.x <= 100){
    scene.x = 300
  }
  bow.y = mouseY
  if(keyWentDown("space")){
    infiniteArrow()
    
  }
  
  
  if(frameCount%100 == 0){
    e = Math.round(random(1,4))
    
  switch(e){
    case 1:
    redB()
    break;
    case 2:
    greenB()
    break;
  case 3:
    pinkB()
    break;
  case 4:
    blueB()
    break;
  }
              }
  if(arrowStorm.isTouching(redBalloon)){
    redBalloon.destroyEach()
    arrowStorm.destroyEach()
  }
   if(arrowStorm.isTouching(greenBalloon)){
    greenBalloon.destroyEach()
     arrowStorm.destroyEach()
  }
   if(arrowStorm.isTouching(pinkBalloon)){
    pinkBalloon.destroyEach()
     arrowStorm.destroyEach()
  }
   if(arrowStorm.isTouching(blueBalloon)){
    blueBalloon.destroyEach()
     arrowStorm.destroyEach()
  }
  drawSprites()
}
function infiniteArrow(){
  
  arrow = createSprite(bow.x+20,bow.y,10,10)
  arrow.addImage(arrowImage)
  arrow.scale = 0.25
  arrow.velocityX = -5
  arrow.lifetime = 1000
  arrowStorm.add(arrow)
  arrow.debug = false
  arrow.setCollider("rectangle",0,0,50,10)

}
function redB(){
  
  rballoon = createSprite(-10,Math.round(random(50,350)),10,10)
  rballoon.addImage(red_balloonImage)
  rballoon.scale = 0.2
  rballoon.velocityX = 7
  rballoon.lifetime = 1000
  redBalloon.add(rballoon)
  rballoon.debug = false
}
function greenB(){
  
  gballoon = createSprite(-10,Math.round(random(50,350)),10,10)
  gballoon.addImage(green_balloonImage)
  gballoon.scale = 0.2
  gballoon.velocityX = 7
  gballoon.lifetime = 1000
  greenBalloon.add(gballoon)
  gballoon.debug = true
}
function pinkB(){
  
  pballoon = createSprite(-10,Math.round(random(50,350)),10,10)
  pballoon.addImage(pink_balloonImage)
  pballoon.scale = 2
  pballoon.velocityX = 7
  pballoon.lifetime = 1000
  pinkBalloon.add(pballoon)
  pballoon.debug = true
}
function blueB(){
  
  blballoon = createSprite(-10,Math.round(random(50,350)),10,10)
  blballoon.addImage(blue_balloonImage)
  blballoon.scale = 0.2
  blballoon.velocityX = 7
  blballoon.lifetime = 1000
  blueBalloon.add(blballoon)
  blballoon.debug = true
}