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
  
   if(touchX > width/2 - width/7 && touchX < width/2 + width/7 && touchY > height/2 - width/7 && touchY <  height/2 + width/7){    
   image(myImage2,0,0,windowWidth,windowHeight);  
       
      noFill();
      stroke(250);
      rectMode(CENTER);
      rect(width/3, height/3, width/7, width/7);
       if(touchX > width/3 - width/7 && touchX < width/3 + width/7 && touchY > height/3 - width/7 && touchY <  height/3 + width/7){ 
           background(150);
           ellipse(width/2, height/2, width/5,width/5);
       }   
   }
}

