let rad = 0;
let growthRate = 0;
let shrinkRate = 0;
let sound1, sound2;
let circles = [];
let osc;


function setup(){
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw(){
  background(0, 25);
  noFill();
  stroke(255);
  strokeWeight(2);
  
  rad += growthRate;
  rad -= shrinkRate;
  rad = max(rad, 0);
  
  if(rad === 0){
    circles = [];
  }
  
  for(let c of circles){
    circle(c.x, c.y, rad);
  }
  
}

function mousePressed(){
  circles.push({x: mouseX, y: mouseY});
  
  growthRate = 5;
  shrinkRate = 0;
}

function mouseReleased(){
  shrinkRate = 8;
  growthRate = 0;
}