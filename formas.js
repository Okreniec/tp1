let Ancho;
let AnchoLineas;

function rectangulo(posicion) { //Rectangulos terminados

  Ancho = map(mouseX, 0, width, 13, 11);

  AnchoLineas = map(mouseX, 0, width, 15, 12.6);

  strokeWeight(width/Ancho);
  strokeCap(SQUARE); //puntas de las líneas (cuadradas)

  if (posicion === 'arribaIzq') { //listo
    noStroke();
    fill("#81eaa8");
    quad(0, 0,
    width / 2, 0,
    width / 2, height / AnchoLineas,
    width / AnchoLineas, height / AnchoLineas );

  }  else if (posicion === 'arribaDer'){ //listo
    noStroke();
    fill("#b11e31");
    quad(width / 2.01, 0,
    width, 0,
    width - width / AnchoLineas, height / AnchoLineas,
    width / 2.01, height / AnchoLineas);

  } else if (posicion === 'abajoIzq') { //listo
    noStroke();
    fill("#060411");
    quad(width / AnchoLineas, height - height / AnchoLineas,
    width / 2, height - height / AnchoLineas,
    width / 2, height,
    0, height);

  } else if (posicion === 'abajoDer') { //listo
    noStroke();
    fill("#dd98d7");
    quad(width / 2.01, height - height / AnchoLineas,
    width - width / AnchoLineas, height - height / AnchoLineas,
    width, height,
    width / 2.01, height);

  } else if (posicion === 'derechaSup') { //listo
    noStroke();
    fill("#b11e31");
    quad(width, height / 2,
    width, -1,
    width - width / AnchoLineas, height / AnchoLineas,
    width - width / AnchoLineas, height / 2);

  } else if (posicion === 'derechaInf') { //listo
    noStroke();
    fill("#b11e31");
    quad(width - width / AnchoLineas, height / 2.01,
    width - width / AnchoLineas, height - height / AnchoLineas,
    width, height+1,
    width, height / 2.01);

  } else if (posicion === 'izquierdaSup') { //listo
    noStroke();
    fill("#060411");
    quad(0, -1,
    0, height / 2,
    width / AnchoLineas, height / 2,
    width / AnchoLineas, height / AnchoLineas);

  } else if (posicion === 'izquierdaInf') { //listo
    noStroke();
    fill("#060411");
    quad(width / AnchoLineas, height - height / AnchoLineas,
    width / AnchoLineas, height / 2.01,
    0, height / 2.01,
    0, height+1);
  
  }
}

function circulo(posicion) { //semicirculos terminados
  if (posicion === 'arribaDer') {
    stroke("#81eaa8");
    noFill();
    arc(width / 2, 0, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);

  } else if (posicion === 'arribaIzq') {
    stroke("#81eaa8");
    noFill();
    arc(width / 2, 0, width - width / Ancho , height - height / Ancho, PI / 2.005, -PI / 2);

  } else if (posicion === 'abajoDer') {
    stroke("#dd98d7");
    noFill();
    arc(width / 2, height, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);

  } else if (posicion === 'abajoIzq') {
    stroke("#dd98d7");
    noFill();
    arc(width / 2, height, width - width / Ancho , height - height / Ancho, PI / 2, -PI / 2.005);

  }
}