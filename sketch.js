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

let dibujarTriangulo0 = false;
let dibujarTriangulo1 = false;
let dibujarTriangulo2 = false;
let dibujarTriangulo3 = false;
let dibujarTriangulo4 = false;
let dibujarTriangulo5 = false;
let dibujarTriangulo6 = false;
let dibujarTriangulo7 = false;

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

  condicionales('trianguloAbajoIzqInf'); //Abajo izq inf
  condicionales('trianguloArribaDerSup'); //Arriba der sup
  
  circulo('arribaDer');

  rectangulo('derechaSup'); //linea a la derecha Arriba

  rectangulo('arribaIzq'); //linea que está a mitad del circulo de arriba izquierda
  
  circulo('abajoIzq');

  rectangulo('abajoIzq');
  rectangulo('abajoDer');

  condicionales('trianguloAbajoDerSup'); //Abajo der sup

  rectangulo('izquierdaSup'); //linea a la izquierda Arriba
  rectangulo('arribaDer');
  
  circulo('arribaIzq');

  condicionales('trianguloAbajoDerInf'); //Abajo der inf

  rectangulo('izquierdaInf'); //linea a la izquierda Abajo
  rectangulo('derechaInf'); //linea a la derecha Arriba
  
  circulo('abajoDer');

  condicionales('trianguloArribaIzqSup'); //Arriba izq sup

  circulo('bordeSupDer');
  circulo('bordeSupIzq');
  circulo('bordeInfIzq');
  circulo('bordeInfDer');

  condicionales('trianguloArribaIzqInf'); //Arriba izq inf

  condicionales('circuloMedio');

  condicionales('trianguloAbajoIzqSup'); //Abajo izq sup
  condicionales('trianguloArribaDerInf');  //Arriba der inf
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
}