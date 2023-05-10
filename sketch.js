let colores = ["#81eaa8", "#dd98d7", "#b11e31", "#ffbf00", "#00aedb"];
let colores1 = [ "#dd98d7", "#b11e31", "#ffbf00", "#00aedb", "#81eaa8"];
let colores2 = ["#b11e31", "#ffbf00", "#00aedb", "#81eaa8", "#dd98d7"];
let colores3 = ["#ffbf00", "#00aedb", "#81eaa8", "#dd98d7", "#b11e31"];
let colores4 = ["#00aedb", "#81eaa8", "#dd98d7", "#b11e31", "#ffbf00", "#060411"];
//let colores5 = ["#0a9777", "#5450bf", "#0998c0", "#03476a"];



function setup() {
  createCanvas(windowHeight, windowHeight);
}

function draw() {

  let indexColor = floor(map(mouseY, 0, height, 0, colores.length));
  color0 = colores[indexColor];
  color1 = colores1[indexColor];
  color2 = colores2[indexColor];
  color3 = colores3[indexColor];
  color4 = colores[indexColor];
  //color5 = colores5[indexColor];

  background('#0a9777');

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