var myImage2;

function preload(){
    myImage2 = loadImage("images/prova2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill();
  stroke(250);
  rectMode(CENTER);
  rect(width/2, height/2, width/7, width/7);
  noStroke();
  fill(250);
  textSize(height/12);
  text("touch here", width/2, height/2); 
  
 //var distanceX = dist(width/2 - width/7, height/2 - width/7, width/2 + width/7, height/2 + width/7);
 // var distanceY = dist(width/2 - width/7, height/2 - width/7, width/2 + width/7, height/2 + width/7);
  
   if(touchX > width/2 - width/7 && touchX < width/2 + width/7 && touchY > height/2 - width/7 && touchY <  height/2 + width/7){   
    
   image(myImage2,0,0,windowWidth,windowHeight);  
}

