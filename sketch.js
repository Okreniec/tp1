function setup() {
  createCanvas(windowHeight, windowHeight);

}

function draw() {
  background(200);

  rectangulo('arriba'); //linea que está a mitad del circulo de arriba
  circulo('arriba');
  rectangulo('derecha'); //linea a la derecha
  rectangulo('izquierda'); //linea a la izquierda
  
  circulo('abajo');
  rectangulo('abajo'); //linea que está a mitad del circulo de abajo

}