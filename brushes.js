//random squares
function squares(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  push();
  translate(x,y);
  rotate(random(px));
  rect(0+random(50),0+random(50),10,10);
  pop();
  return false;
}

// random lines
function lines(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  push();
  translate(x,y);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  rotate(random(px));
  line(0+random(50),0+random(50),0,0);
  pop();

  return false;
}

//draws circles
function circle1(x,y, px,py,lineWidth) {
  strokeWeight(lineWidth);
  ellipse(x,y,px,py);

  return false;
};


function circle2(x, y, speed, lineWidth) {
  strokeWeight(lineWidth);
  for (var i = 0; i < speed * .01; i++) {
    ellipse(x + random(-100,100), y + random(-100,100), speed * .8, speed * .8);
  }
  return false;
}

function circle3(x, y, speed, lineWidth) {
  strokeWeight(lineWidth);
  for (var i = 0; i < speed * .01; i++) {
    ellipse(x + random(-100,100), y + random(-100,100), speed * .8, speed * .8);
    ellipse(width/2+((width/2)-(x + random(-100,100))),(y + random(-100,100)),speed * .8,speed * .8);
  }
  return false;
}

// simple mirror
function mirrorLine1(x, y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  return false;
}
// mirror lines
function mirrorLine2(x,y, px, py, lineWidth) {
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(px,py,x,y);
  line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
  line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
  line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
  return false;
}

// 8 mirror lines
// function mirrorLine3(x,y, px, py, lineWidth) {
//   strokeWeight(lineWidth);
//   line(px,py,x,y);
//   line(width/2+((width/2)-px),py,width/2+((width/2)-x),y);
//   line(px,height/2+((height/2)-py),x,height/2+((height/2)-y));
//   line(width/2+((width/2)-px),height/2+((height/2)-py),width/2+((width/2)-x),height/2+((height/2)-y));
//   line(width/2+((width/2)-py),width/2-((width/2)-px),width/2+((width/2)-y),width/2-((width/2)-x));
//   line(height/2-((height/2)-py),width/2-((width/2)-px),height/2-((height/2)-y),width/2-((width/2)-x));
//   line(width/2+((width/2)-py),height/2+((height/2)-px),width/2+((width/2)-y),height/2+((height/2)-x));
//   line(width/2-((width/2)-py),height/2+((height/2)-px),width/2-((width/2)-y),height/2+((height/2)-x));
//   return false;
// }

function mirrorLine3(x,y, px, py, lineWidth) {
  if(height<width){
    var short = height; 
  }else{
    var short = width;
  }
  strokeWeight(lineWidth);
  line(px,py,x,y);
  line(short/2+((short/2)-px),py,short/2+((short/2)-x),y);
  line(px,short/2+((short/2)-py),x,short/2+((short/2)-y));
  line(short/2+((short/2)-px),short/2+((short/2)-py),short/2+((short/2)-x),short/2+((short/2)-y));
  line(short/2+((short/2)-py),short/2-((short/2)-px),short/2+((short/2)-y),short/2-((short/2)-x));
  line(short/2-((short/2)-py),short/2-((short/2)-px),short/2-((short/2)-y),short/2-((short/2)-x));
  line(short/2+((short/2)-py),short/2+((short/2)-px),short/2+((short/2)-y),short/2+((short/2)-x));
  line(short/2-((short/2)-py),short/2+((short/2)-px),short/2-((short/2)-y),short/2+((short/2)-x));
  return false;
}





