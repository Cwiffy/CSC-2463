// Runell Ricks
// Professor: Andrew Webb
// CSC 2463

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //canvas setup
  let x = 200;
  let y = 100;
  colorMode(RGB, 255, 255, 255, 1);
  createCanvas(x, y);
  background(149, 239, 96);
  //circle & square shapes
  ellipse(x/4, y/2, (y - y/5));
  square((x/2)+(x/20), y/10, (y - y/5))
}
