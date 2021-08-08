var spacebg,spacebgimg
var spacecraft1,spacecraft1img
var spacecraft2,spacecraft2img
var spacecraft3,spacecraft3img
var spacecraft4,spacecraft4img
var iss,issimg
var hasDocked=false

function preload() {
  spacebgimg=loadImage("spacebg.jpg")
  spacecraft1img=loadImage("spacecraft1.png")
  spacecraft2img=loadImage("spacecraft2.png")
  spacecraft3img=loadImage("spacecraft3.png")
  spacecraft4img=loadImage("spacecraft4.png")
issimg=loadImage("iss.png")
}


function setup() {
  createCanvas(800,400);
  

  spacecraft1=createSprite(285,240);
  spacecraft1.addImage(spacecraft1img);
  spacecraft1.scale=0.2

  iss=createSprite(330,150)
  iss.addImage(issimg)
  iss.scale=0.7

}

function draw() {
  background(spacebgimg);  
  drawSprites();
  spacecraft1.addImage(spacecraft1img)
  if(!hasDocked){
spacecraft1.x=spacecraft1.x+random(-1,1)
if(keyDown("RIGHT_ARROW")){
spacecraft1.addImage(spacecraft4img)
spacecraft1.x+=1
}
if(keyDown("LEFT_ARROW")){
  spacecraft1.addImage(spacecraft3img)
  spacecraft1.x-=1
}
if(keyDown("UP_ARROW")){
  spacecraft1.y-=1
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft1.addImage(spacecraft2img)
    
    }
}
if(spacecraft1.y <= (iss.y+70) && spacecraft1.x <= (iss.x-10)){
  hasDocked=true;
  textSize(25);
  fill("white");
  text("Docking sucssesfull",200,300)
}


}