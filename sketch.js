let x = 150;  

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  x = mouseX;

  if (x > width / 2) {
    fill(255, 0, 0);  
  } else {
    fill(0, 0, 255);  
  }

 
  noStroke();
  triangle(x, 150, x + 100, 150, x + 30, 100);
  
  // x is the horizontal variable
  // mouseX is used to dynamically change x
  // Conditionals are used to change the colour of the triangle based on x where red if x>width/2 and blue if x<width/2
  // the triangle is drawing using x to define positioning 
  

}