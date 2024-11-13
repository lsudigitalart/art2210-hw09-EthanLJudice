let generateCreature = false;
let imgBackdrop;
let BirdA;
let BirdB;
let BirdC;
let BirdASpeed;
let BirdBSpeed;
let BirdCSpeed;

function preload() {
  imgBackdrop = loadImage("cloud.jfif");
  
}


function setup() {
  createCanvas(400, 400);
  noStroke();
  background(220);
  image(imgBackdrop, 0, 0, 400, 400);
  translate(width/2, height/2);
  BirdA = loadImage("bird.gif");
  BirdB = loadImage("bird.gif");
  BirdC = loadImage("bird.gif");
  BirdASpeed = 3;
  BirdBSpeed = 3;
  BirdCSpeed = 3;
  
  image(BirdA, BirdASpeed, 75, 50, 50);
  image(BirdB, BirdBSpeed, 175, 50, 50);
  image(BirdC, BirdCSpeed, 275, 50, 50);
  
}

function draw() {
  
  image(BirdA, BirdASpeed, 75, 50, 50);
  image(BirdB, BirdBSpeed, 175, 50, 50);
  image(BirdC, BirdCSpeed, 275, 50, 50);
  birdMove();

}

function birdMove(){
    randNum1 = random(0.5, 4);
    randNum2 = random(0.5, 4);
    randNum3 = random(0.5, 4);
    BirdASpeed += randNum1;
    BirdBSpeed += randNum2;
    BirdCSpeed += randNum3;
    
}
