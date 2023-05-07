function setup() {
  createCanvas(windowHeight, windowHeight);

}

function draw() {
  background(200);

  circulo('arribaDer');
  rectangulo('arriba'); //linea que está a mitad del circulo de arriba
  circulo('arribaIzq');
  rectangulo('derecha'); //linea a la derecha
  rectangulo('izquierda'); //linea a la izquierda
  
  circulo('abajoIzq');
  circulo('abajoDer');
  rectangulo('abajo'); //linea que está a mitad del circulo de abajo

}