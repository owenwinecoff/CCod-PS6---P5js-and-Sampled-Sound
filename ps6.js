let rad = 0;
let growthRate = 0;
let shrinkRate = 0;
let sound1, sound2;
let circles = []; // Array to store all circles

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(0, 25);
  noFill();
  stroke(255);
  strokeWeight(2);
  
  // Update radius
  rad += growthRate;
  rad -= shrinkRate;
  // Constrain radius to be non-negative
  rad = max(rad, 0);
  
  // If radius hits 0, clear all circles
  if(rad === 0){
    circles = [];
  }
  
  // Draw all stored circles with the current radius
  for(let c of circles){
    circle(c.x, c.y, rad);
  }
  
}

function mousePressed(){
  // Add a new circle at mouse position
  circles.push({x: mouseX, y: mouseY});
  
  growthRate = 5;
  shrinkRate = 0;
}

function mouseReleased(){
  shrinkRate = 8;
  growthRate = 0;
}