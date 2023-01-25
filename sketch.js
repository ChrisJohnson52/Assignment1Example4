/*
Christian-Thomas Dougas De Guzman Johnson
CSC 2463
Drawing With P5
*/

//Example 4
function setup() 
{
  createCanvas(400, 400);
}

function star(x, y)
{
  //Create Star
  beginShape()
  vertex(x+100, y-30);
  vertex(x+40, y+15);//
  vertex(x+60, y+90);
  vertex(x, y+45);
  vertex(x-60, y+90);
  vertex(x-40, y+15);//
  vertex(x-100, y-30);
  vertex(x-30, y-30);
  vertex(x, y-100);
  vertex(x+30, y-30);
  endShape(CLOSE);
}

function draw() 
{
  //Background
  background('#080a82');
  //White Outline
 	strokeWeight(5);
  stroke(255, 255, 255);
  //Green Circle
  fill('rgb(0, 153, 0)');
  ellipse(200, 200, 200, 200);
  //Red Star
  fill('rgb(255, 0, 0)');
  star(200, 200);
}