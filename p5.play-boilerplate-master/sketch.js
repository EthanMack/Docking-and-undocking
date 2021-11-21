var iss,spacecraft
var bg,issimg, scimg
var hasDocked=false

function preload(){
  bg=loadImage("spacebg.jpg")
  issimg=loadImage("iss.png")
  scimg=loadImage("spacecraft1.png")
  scimg1=loadImage("spacecraft2.png")
  scimg2=loadImage("spacecraft3.png")
  scimg3=loadImage("spacecraft4.png")
}



function setup() {
  createCanvas(800,400);
 spacecraft = createSprite(285,240);
 spacecraft.addImage(scimg)
 spacecraft.scale=0.2
 
 iss=createSprite(330,130)
 iss.addImage(issimg)
 iss.scale=0.7
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
  }
  
  if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(25)
    fill("white")
    text("Mission Complete",200,300)
  }

  if(keyDown("UP_ARROW")){
   spacecraft.y=spacecraft.y-2
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(scimg1)
    spacecraft.y=spacecraft.y+2
   }

   if(keyDown("LEFT_ARROW")){
     spacecraft.addImage(scimg3)
    spacecraft.x=spacecraft.x-2
   }
 
   if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2) 
    spacecraft.x=spacecraft.x+2
    }

  drawSprites();
}