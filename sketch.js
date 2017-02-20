var myImage2;
var cnv;

function preload(){
    myImage2 = loadImage("images/prova2.jpg");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.touchStarted(preload);
}

function draw() {
  background(0);
  noFill();
  stroke(250);
  rectMode(CENTER);
  rect(width/2, height/2, width/7, height/7);
  noStroke();
  fill(250);
  text("touch here", width/2, height/2);
   
}

function touchStarted(){
   image(myImage2,0,0,windowWidth,windowHeight); 
}