let cnv, active, x, y, r, g, b;
let count = 0, maxCount;
let name = "You're awesome!";

function setup() {
  cnv = createCanvas(400, 400); //Was 600,800
  cnv.mousePressed(rePaint);
  background(250);
  x = 0;
  y = 0;
  r = random(255);
  g = random(255);
  b = random(255);
  active = true;
  maxCount = name.length*5;
}

function draw() {
  translate(width/2,height/2);
  paint();
  count += 1;
  if (count == maxCount) {
    noLoop();
    active = false;
    stroke(100,200);
    noFill();
    rectMode(CENTER);
    rect(0, 0, width-50, height-50);
    fill(245);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(45);
    textFont('Comforter');
    text('thank you', 0, 0);
  }
}

function paint() {
  push();
  //translate(x, y);
  let turn = random(0, 360);
  rotate(turn);
  for (let i = 0; i < name.length*100; i++) {
    x += random(-1, 1);
    y += random(-1, 1);
    x = constrain(x, 0, width/2);
    y = constrain(y, 0, height/2);
    r += random(-1, 1);
    g += random(-1, 1);
    b += random(-1, 1);
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);
    noStroke();
    fill(r, g, b, 10);
    ellipse(x, y, 15, 1);
  }
  pop();
  x = random(-width/4,width/4);
  y = random(-height/4,height/4);
}

function rePaint() {
  if (!active) {
    loop();
    active = true;
    count = 0;
  } else if (active) {
    noLoop();
    active = false;
  }
}
