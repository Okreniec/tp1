function setup() {
  createCanvas(windowHeight, windowHeight);

}

function draw() {
  background(200);

  circulo('arribaDer');

  /*blendMode(DIFFERENCE);
  fill(255,0,0);
  noStroke();
  ellipse(width,0,width,height);
  blendMode(BLEND);*/

  rectangulo('arribaIzq'); //linea que está a mitad del circulo de arriba izquierda
  rectangulo('arribaDer');

  rectangulo('derechaSup'); //linea a la derecha Arriba
  
  circulo('abajoIzq');

  rectangulo('derechaInf'); //linea a la derecha Arriba
  rectangulo('abajoDer');
  rectangulo('abajoIzq');
  rectangulo('izquierdaSup'); //linea a la izquierda Arriba
  rectangulo('izquierdaInf'); //linea a la izquierda Abajo

  circulo('arribaIzq');
  circulo('abajoDer');

}