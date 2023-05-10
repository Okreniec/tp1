let Ancho;
let AnchoLineas;

function rectangulo(posicion) { //Rectangulos terminados

  AnchoLineas = map(mouseX, 0, width, 15, 12.6);

  strokeCap(SQUARE); //puntas de las líneas (cuadradas)

  if (posicion === 'arribaIzq') { //listo
    noStroke();
    fill(color0);
    quad(0, 0,
    width / 2, 0,
    width / 2, height / AnchoLineas,
    width / AnchoLineas, height / AnchoLineas );

  }  else if (posicion === 'arribaDer'){ //listo
    noStroke();
    fill(color2);
    quad(width / 2.01, 0,
    width, 0,
    width - width / AnchoLineas, height / AnchoLineas,
    width / 2.01, height / AnchoLineas);

  } else if (posicion === 'abajoIzq') { //listo
    noStroke();
    fill(color4);
    quad(width / AnchoLineas, height - height / AnchoLineas,
    width / 2, height - height / AnchoLineas,
    width / 2, height,
    0, height);

  } else if (posicion === 'abajoDer') { //listo
    noStroke();
    fill(color1);
    quad(width / 2.01, height - height / AnchoLineas,
    width - width / AnchoLineas, height - height / AnchoLineas,
    width, height,
    width / 2.01, height);

  } else if (posicion === 'derechaSup') { //listo
    noStroke();
    fill(color2);
    quad(width, height / 2,
    width, -1,
    width - width / AnchoLineas, height / AnchoLineas-1,
    width - width / AnchoLineas, height / 2);

  } else if (posicion === 'derechaInf') { //listo
    noStroke();
    fill(color2);
    quad(width - width / AnchoLineas, height / 2.01,
    width - width / AnchoLineas, height - height / AnchoLineas+1,
    width, height+1,
    width, height / 2.01);

  } else if (posicion === 'izquierdaSup') { //listo
    noStroke();
    fill(color4);
    quad(0, -1,
    0, height / 2,
    width / AnchoLineas, height / 2,
    width / AnchoLineas, height / AnchoLineas-1);

  } else if (posicion === 'izquierdaInf') { //listo
    noStroke();
    fill(color4);
    quad(width / AnchoLineas, height - height / AnchoLineas+1,
    width / AnchoLineas, height / 2.01,
    0, height / 2.01,
    0, height+1);
  
  }
}

function circulo(posicion) { //semicirculos terminados

  Ancho = map(mouseX, 0, width, 13, 11);

  strokeWeight(width/Ancho);

  if (posicion === 'arribaDer') {
    stroke(color0);
    noFill();
    arc(width / 2, 0, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);

  } else if (posicion === 'arribaIzq') {
    stroke(color0);
    noFill();
    arc(width / 2, 0, width - width / Ancho , height - height / Ancho, PI / 2.005, -PI / 2);

  } else if (posicion === 'abajoDer') {
    stroke(color1);
    noFill();
    arc(width / 2, height, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);

  } else if (posicion === 'abajoIzq') {
    stroke(color1);
    noFill();
    arc(width / 2, height, width - width / Ancho , height - height / Ancho, PI / 2, -PI / 2.005);

  } else if (posicion === 'bordeSupDer') {
    blendMode(DIFFERENCE);
    stroke(color3);
    noFill();
    arc(0, 0, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);
    blendMode(BLEND);

  } else if (posicion === 'bordeSupIzq') {
    blendMode(DIFFERENCE);
    stroke(color3);
    noFill();
    arc(width, 0, width - width / Ancho , height - height / Ancho, PI / 2, -PI / 2);
    blendMode(BLEND);

  } else if (posicion === 'bordeInfDer') {
    blendMode(DIFFERENCE);
    stroke(color3);
    noFill();
    arc(width, height, width - width / Ancho , height - height / Ancho, PI / 2, -PI / 2);
    blendMode(BLEND);

  } else if (posicion === 'bordeInfIzq') {
    blendMode(DIFFERENCE);
    stroke(color3);
    noFill();
    arc(0, height, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);
    blendMode(BLEND);

  }
}