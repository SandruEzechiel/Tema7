function setup() {
  createCanvas( windowWidth, windowHeight);
}

function draw() {
  background(0); // Fundal negru

  let centerX = width / 2; // Coordonata X a centrului canvasului
  let centerY = height / 2; // Coordonata Y a centrului canvasului

  // Desenează Soarele
  fill(255, 255, 0); // Galben pentru Soare
  ellipse(centerX, centerY, 80, 80); // Desenează Soarele în centrul canvasului

  // Desenează Planetele
  drawPlanet(centerX, centerY, 100, 0.8, 50, color(255, 0, 0)); // Mercur
  drawPlanet(centerX, centerY, 150, 0.6, 70, color(255, 165, 0)); // Venus
  drawPlanet(centerX, centerY, 200, 0.4, 90, color(0, 255, 255)); // Pământ
  drawPlanet(centerX, centerY, 250, 0.3, 110, color(255, 255, 0)); // Marte
  drawPlanet(centerX, centerY, 300, 0.2, 130, color(255)); // Jupiter
  drawPlanet(centerX, centerY, 350, 0.15, 150, color(255, 140, 0)); // Saturn
  drawPlanet(centerX, centerY, 400, 0.1, 170, color(0, 0, 255)); // Uranus
  drawPlanet(centerX, centerY, 450, 0.05, 190, color(138, 43, 226)); // Neptun
}

// Funcție pentru a desena o planetă
function drawPlanet(centerX, centerY, distance, diameterRatio, orbitRadius, col) {
  let angle = millis() / 1000 * PI / orbitRadius; // Unghi dependent de timp
  let x = centerX + cos(angle) * distance; // Coordonata X a planetei
  let y = centerY + sin(angle) * distance; // Coordonata Y a planetei
  let diameter = diameterRatio * 40; // Diametrul planetei

  fill(col); // Setează culoarea de umplere
  ellipse(x, y, diameter, diameter); // Desenează planeta

  // Desenează orbita
  noFill(); // Fără umplere pentru orbită
  stroke(100); // Culoare gri pentru orbită
  ellipse(centerX, centerY, distance * 2, distance * 2); // Desenează orbita
}
