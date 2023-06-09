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
    stroke(color3);
    noFill();
    arc(0, height, width - width / Ancho , height - height / Ancho, -PI / 2, PI / 2);
  }
}

function condicionales(posicion) {
  if (speed >= 1 && speed <= 2) {
    dibujarCirculo = true;
  } else if (speed >= 2 && speed <= 3) {
    dibujarTriangulo0 = true;
  } else if (speed >= 3 && speed <= 4) {
    dibujarTriangulo1 = true;
  } else if (speed >= 4 && speed <= 5) {
    dibujarTriangulo2 = true;
  } else if (speed >= 5 && speed <= 6) {
    dibujarTriangulo3 = true;
  } else if (speed >= 6 && speed <= 7) {
    dibujarTriangulo4 = true;
  } else if (speed >= 7 && speed <= 8) {
    dibujarTriangulo5 = true;
  } else if (speed >= 8 && speed <= 9) {
    dibujarTriangulo6 = true;
  } else if (speed >= 9 && speed <= 10) {
    dibujarTriangulo7 = true;
  }

  if (posicion === 'circuloMedio') {
    if (dibujarCirculo) {
      fill(color2);
      noStroke();
      circle(width / 2, height / 2, width / 12 + width / AnchoLineas, height / 12 + height / AnchoLineas);
    }
  } else if (posicion === 'trianguloArribaIzqInf'){ //Arriba izq inf
    if (dibujarTriangulo0) {
      fill(127.5, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(0, 0, 0, height/2, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloArribaIzqSup'){ //Arriba izq sup
    if (dibujarTriangulo1) {
      fill(63.75, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(0, 0, width/2, 0, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloArribaDerSup'){ //Arriba der sup
    if (dibujarTriangulo2) {
      fill(63.75, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(width/2, 0, width, 0, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloArribaDerInf'){ //Arriba der inf
    if (dibujarTriangulo3) {
      fill(191.25, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(width, 0, width, height/2, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloAbajoIzqSup'){ //Abajo izq sup
    if (dibujarTriangulo4) {
      fill(127.5, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(0, height, 0, height/2, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloAbajoIzqInf'){ //Abajo izq inf
    if (dibujarTriangulo5) {
      fill(255, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(0, height, width/2, height, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloAbajoDerInf'){ //Abajo der inf
    if (dibujarTriangulo6) {
      fill(255, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(width/2, height, width, height, width/2, height/2);
      blendMode(BLEND);
    }
  } else if (posicion === 'trianguloAbajoDerSup'){ //Abajo der sup
    if (dibujarTriangulo7) {
      fill(191.25, 50);
      noStroke();
      blendMode(DIFFERENCE);
      triangle(width, height, width, height/2, width/2, height/2);
      blendMode(BLEND);
    }
  }
}