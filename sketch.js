var selectedBrush;
var alpha;
var player1;
var player2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  rectMode(CENTER);
  frameRate(30);
  selectedBrush = 'lines';
  alpha = 6;
  
  soundFormats('wav');
  player1 = loadSound('assets/atmos');
  player2 = loadSound('assets/bells');
}

function mouseDragged() {
  player1.play();
  player2.play();

  //based on horizontal position of mouse
  var red = map(mouseX, 0, width, 0, 255);
  // based on vertical position of mouse
  var blue = map(mouseY, 0, height, 0, 255);
  //distance from mouse to canvas center
  var distanceToCenter = dist(mouseX,mouseY,width/2,height/2);
  var green = map(distanceToCenter,0,dist(0,0,width/2,height/2),0,255);

  // calculate distance from mouse movement
  var speed = dist(pmouseX, pmouseY, mouseX,mouseY);
  //change line width based on mouse speed, less speed more weight
  var lineWidth = map(speed, 0, 10, 5, 0);

  // player1.rate(map(speed,0,dist(0,0,width/2,height/2),1,2))

  //background and settings 
  noStroke();
  fill(0, alpha);
  rect(width/2, height/2, width, height);

  stroke(red, green, blue, 255);
  strokeWeight(lineWidth);

  ///////////// BRUSHES
  switch (selectedBrush) {
    case "squares":
      squares(mouseX, mouseY,speed, speed,lineWidth);
      break;
    case "lines":
      lines(mouseX, mouseY,speed, speed,lineWidth);
      break;

    case "circle1":
      circle1(mouseX, mouseY,speed, speed,lineWidth);
      break;
    case "circle2":
      circle2(pmouseX, pmouseY, speed, lineWidth);
      break;
    case "circle3":
      circle3(pmouseX, pmouseY, speed, lineWidth);
      break;

    case "mirrorLine1":
      mirrorLine1(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
      break;
    case "mirrorLine2":
      mirrorLine2(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
      break;
    case "mirrorLine3":
      mirrorLine3(pmouseX, pmouseY,mouseX, mouseY,lineWidth);
      break;
    
    default:
      lines(mouseX, mouseY,speed, speed,lineWidth);
  }

  return false;
}

function mouseReleased(){

}