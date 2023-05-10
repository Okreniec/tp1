function setup() {
  createCanvas(windowHeight, windowHeight);
}

function draw() {
  background("#0a9777");

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
}