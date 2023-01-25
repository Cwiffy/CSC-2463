// Creates the space for sketching on the webpage
function setup() {
  createCanvas(200,600);
}

function draw() { 
  colorMode(RGB, 255, 255, 255, 1);

  //canvas setup
  let x = 200;
  let y1 = 100;
  //artificial canvas
  push();
  strokeWeight(0);
  fill(149, 239, 96);
  rect(0,0,x, y1);
  pop();
  //circle & square shapes
  fill(255);
  stroke(0);
  ellipse(x/4, y1/2, (y1 - y1/5));
  square((x/2)+(x/20), y1/10, (y1 - y1/5));

  //canvas setup
  let y2 = 200;
  strokeWeight(0);
  //red, top circle
  fill(255, 0, 10, 0.3);
  ellipse(x/2, ((y2)/3)+100, (y2)/2);
  //blue, left circle
  fill(0, 10, 255, 0.3);
  ellipse(x/3, ((15*y2)/24)+100, y2/2);
  //green, right circle
  fill(10, 255, 0, 0.3);
  ellipse((2*x)/3, ((15*y2)/24)+100, y2/2);

  //artificial canvas
  push();
  strokeWeight(0);
  fill(0);
  rect(0,300,x, y1);
  pop();
  //pacman drawing
  fill(255, 247, 110);
  arc(x/4, (y1/2)+300, (y1 - y1/5), (y1 - y1/5), PI + (PI/4), HALF_PI + (PI/4));
  //red ghost
  fill(219, 80, 62);
  rect((x/2)+(x/20), (y1/2)+300, (y1 - y1/5), (y1 - y1/5) / 2);
  arc((3*x)/4, (y1/2)+300, (y1 - y1/5), (y1 - y1/5), PI, 0);
  ghostEyes(((3*x)/4)+(x/10),(y1/2)+300);
  ghostEyes(((3*x)/4)-(x/10),(y1/2)+300);

  //artificial canvas
  push();
  strokeWeight(0);
  fill(0,0,126);
  rect(0,400,x, y2);
  pop();
  //roundel
  strokeWeight(1);
  stroke(255);
  fill(54, 128, 34);
  ellipse(x/2, (y2/2)+400, (y2/2));
  //star
  fill(240, 47, 28);
  beginShape();
  vertex(x/2,(y2/2 - 50)+400);
  vertex((x/2 - 14.695),(y2/2 - 20.225)+400);
  vertex((x/2 - 47.553),(y2/2 - 15.451)+400);
  vertex((x/2 - 23.776),(y2/2 + 7.725)+400);
  vertex((x/2 - 29.389),(y2/2 + 40.451)+400);
  vertex(x/2,(y2/2 + 25)+400);
  vertex((x/2 + 29.389),(y2/2 + 40.451)+400);
  vertex((x/2 + 23.776),(y2/2 + 7.725)+400);
  vertex((x/2 + 47.553),(y2/2 - 15.451+400));
  vertex((x/2 + 14.695),(y2/2 - 20.225)+400);
  vertex(x/2,(y2/2 - 50)+400);
  endShape();

  function ghostEyes(x, y) {
    strokeWeight(0);
    fill(255);
    ellipse(x, y, 25);
    fill(0, 76, 237);
    ellipse(x, y, 15);
  }
  
}