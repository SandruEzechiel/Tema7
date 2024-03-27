function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  background(0); 

  let centerX = width / 2; 
  let centerY = height / 2; 

 
  fill(255, 255, 0); 
  ellipse(centerX, centerY, 80, 80); 

 
  drawPlanet(centerX, centerY, 100, 0.8, 50, color(255, 0, 0)); 
  drawPlanet(centerX, centerY, 150, 0.6, 70, color(255, 165, 0)); 
  drawPlanet(centerX, centerY, 200, 0.4, 90, color(0, 255, 255)); 
  drawPlanet(centerX, centerY, 250, 0.3, 110, color(255, 255, 0)); 
  drawPlanet(centerX, centerY, 300, 0.2, 130, color(255)); 
  drawPlanet(centerX, centerY, 350, 0.15, 150, color(255, 140, 0)); 
  drawPlanet(centerX, centerY, 400, 0.1, 170, color(0, 0, 255)); 
  drawPlanet(centerX, centerY, 450, 0.05, 190, color(138, 43, 226)); 
}


function drawPlanet(centerX, centerY, distance, diameterRatio, orbitRadius, col) {
  let angle = millis() / 1000 * PI / orbitRadius; 
  let x = centerX + cos(angle) * distance; 
  let y = centerY + sin(angle) * distance; 
  let diameter = diameterRatio * 40; 

  fill(col); 
  ellipse(x, y, diameter, diameter); 

  
  noFill(); 
  stroke(100); 
  ellipse(centerX, centerY, distance * 2, distance * 2); 
}
