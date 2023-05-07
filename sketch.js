function setup() {
  createCanvas(windowHeight, windowHeight);

}

function draw() {
  background(200);

  rectangulo('arriba'); //linea que está a mitad del circulo de arriba
  circulo('arriba');
  rectangulo('derecha');
  rectangulo('izquierda');
  
  circulo('abajo');
  rectangulo('abajo'); //linea que está a mitad del circulo de abajo

}

/*function dibujarLineasLaterales() {
  stroke(25);
  line(57, 0, 57, width); //Linea Izquierda
  line(height - 57, 0, height - 57, width); //Linea Derecha
}*/