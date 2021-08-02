var shipimage
var shipsprite
var seaimage
var seasprite
function preload(){
seaimage = loadImage("sea.png")
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(800,800);
  seasprite = createSprite(400,400,20,20)
  shipsprite = createSprite(400,450,20,20)
  seasprite.addImage("sea", seaimage)
  shipsprite.addAnimation("ship",shipimage)
  shipsprite.scale = 0.6
  seasprite.velocityX = -10
}

function draw() {
  background("blue");
  if(seasprite.x < 0){
  seasprite.x = seasprite.width/2
  }
  drawSprites();
}