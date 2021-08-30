const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies

var engine,world;
var cat,catImage
var catWalking;
var bg_img;
var snow=[]
function preload()
{
  bg_img = loadImage("snow2.jpg");
  catImage = loadImage("tomOne.png");
  catWalking = loadAnimation("tomThree.png","tomTwo.png");
}


function setup() {
  createCanvas(800,400);

  engine= Engine.create()
  world= engine.world
 imageMode(CENTER)
 cat = createSprite(650,350,20,20)
 cat.addImage("CAT",catImage)
 cat.scale = 0.1
 cat.addAnimation("WALKING",catWalking)

}
function draw() {
  background(51);
  image(bg_img,400,200,800,400)
  snow.push(new Snow(random(100,800),0))
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
  cat.velocityX = -3
  cat.changeAnimation("WALKING");
  }
}



