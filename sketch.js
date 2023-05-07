function setup() {
  createCanvas(windowHeight, windowHeight);
}

function draw() {
  background(200);

  circulo('arribaDer');

  rectangulo('derechaSup'); //linea a la derecha Arriba

  blendMode(DIFFERENCE);
  fill(255,0,0);
  noStroke();
  ellipse(width,0,width,height);
  blendMode(BLEND);

  rectangulo('abajoIzq');
  rectangulo('arribaIzq'); //linea que está a mitad del circulo de arriba izquierda
  
  circulo('abajoIzq');

  rectangulo('abajoDer');
  rectangulo('izquierdaSup'); //linea a la izquierda Arriba
  
  rectangulo('arribaDer');
  rectangulo('izquierdaInf'); //linea a la izquierda Abajo

  circulo('arribaIzq');
  circulo('abajoDer');

  rectangulo('derechaInf'); //linea a la derecha Arriba
}