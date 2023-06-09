let colores = ["#81eaa8", "#dd98d7", "#b11e31", "#ffbf00", "#00aedb"];
let colores1 = [ "#dd98d7", "#b11e31", "#ffbf00", "#00aedb", "#81eaa8"];
let colores2 = ["#b11e31", "#ffbf00", "#00aedb", "#81eaa8", "#dd98d7"];
let colores3 = ["#ffbf00", "#00aedb", "#81eaa8", "#dd98d7", "#b11e31"];
let colores4 = ["#00aedb", "#81eaa8", "#dd98d7", "#b11e31", "#ffbf00", "#060411"];
//let colores5 = ["#0a9777", "#5450bf", "#0998c0", "#03476a"];

let shapes = [];
let speedThreshold = 2;

let prevX, prevY;
let prevTime;
let speed;
let dibujarCirculo = false;

function setup() {
  createCanvas(windowHeight, windowHeight);
  prevX = mouseX;
  prevY = mouseY;
  prevTime = millis();
}

function draw() {
  
  Velocidad();
  
  let indexColor = floor(map(mouseY, 0, height, 0, colores.length));
  color0 = colores[indexColor];
  color1 = colores1[indexColor];
  color2 = colores2[indexColor];
  color3 = colores3[indexColor];
  color4 = colores[indexColor];
  //color5 = colores5[indexColor];

  background('#0a9777');
  
  triangle(0, 0, 0, height/2, width/2, height/2); //Arriba izq inf
  triangle(0, 0, width/2, 0, width/2, height/2); //Arriba izq sup
  triangle(width/2, 0, width, 0, width/2, height/2); //Arriba der sup
  triangle(width, 0, width, height/2, width/2, height/2); //Arriba der inf
  triangle(0, height, 0, height/2, width/2, height/2); //Abajo izq sup
  triangle(0, height, width/2, height, width/2, height/2); //Abajo izq inf
  triangle(width/2, height, width, height, width/2, height/2); //Abajo der inf
  triangle(width, height, width, height/2, width/2, height/2);  //Abajo der sup

  circulo('arribaDer');

  rectangulo('derechaSup'); //linea a la derecha Arriba

  rectangulo('arribaIzq'); //linea que está a mitad del circulo de arriba izquierda
  
  circulo('abajoIzq');

  rectangulo('abajoIzq');
  rectangulo('abajoDer');
  rectangulo('izquierdaSup'); //linea a la izquierda Arriba
  rectangulo('arribaDer');
  
  circulo('arribaIzq');

  rectangulo('izquierdaInf'); //linea a la izquierda Abajo
  rectangulo('derechaInf'); //linea a la derecha Arriba
  
  circulo('abajoDer');

  circulo('bordeSupDer');
  circulo('bordeSupIzq');
  circulo('bordeInfIzq');
  circulo('bordeInfDer');

  if (dibujarCirculo) {
    fill(colores2);
    noStroke();
    blendMode(DIFFERENCE);
    circle(width / 2, height / 2, width / 12 + width / AnchoLineas, height / 12 + height / AnchoLineas);
    blendMode(BLEND);
  }

}

function Velocidad() {
  let distX = mouseX - prevX;
  let distY = mouseY - prevY;
  let distance = sqrt(distX * distX + distY * distY);

  let currentTime = millis();
  let deltaTime = currentTime - prevTime;

  speed = distance / deltaTime;

  prevX = mouseX;
  prevY = mouseY;
  prevTime = currentTime;

  if (speed >= 1 && speed <= 2) {
    dibujarCirculo = true;
  }
}