function rectangulo(posicion) { //Rectangulos terminados
  strokeWeight(width/8.7); //anchura de las líneas
  strokeCap(SQUARE); //puntas de las líneas (cuadradas)

  if (posicion === 'arribaIzq') {
    stroke(50);
    line(width - width * 0.99, 0 + height * 0.03, width / 2, 0 + height * 0.03);

  }  else if (posicion === 'arribaDer'){
    stroke(50);
    line(width / 2.01, 0 + height * 0.03, width - 7, 0 + height * 0.03);

  } else if (posicion === 'abajoIzq') { 
    stroke(50);
    line(width - width * 0.99, height - height * 0.02, width / 2, height - height * 0.02);

  } else if (posicion === 'abajoDer') {
    stroke(50);
    line(width / 2.01, height - height * 0.02, width, height - height * 0.02);

  } else if (posicion === 'derechaSup') {
    stroke(50);
    line(width - width * 0.943, 0, width - width * 0.943, height / 2);

  } else if (posicion === 'derechaInf') {
    stroke(50);
    line(width - width * 0.943, height / 2.01, width - width * 0.943, height);

  } else if (posicion === 'izquierdaSup') {
    stroke(50);
    line(width - width * 0.056, 0, width - width * 0.056, height / 2);


  } else if (posicion === 'izquierdaInf') {
    stroke(50);
    line(width - width * 0.056, height / 2.01, width - width * 0.056, height);
  
  }
}

function circulo(posicion) { //semicirculos terminados
  if (posicion === 'arribaDer') {
    stroke(100);
    noFill();
    arc(width / 2, 0, width * 0.885, height * 0.885, -PI / 2, PI / 2);

  } else if (posicion === 'arribaIzq') {
    stroke(100);
    noFill();
    arc(width / 2, 0, width * 0.885, height * 0.885, PI / 2.1, -PI / 2);

  } else if (posicion === 'abajoDer') {
    stroke(100);
    noFill();
    arc(width / 2, height, width * 0.885, height * 0.885, -PI/2, PI / 2);

  } else if (posicion === 'abajoIzq') {
    stroke(100);
    noFill();
    arc(width/2, height, width * 0.885, height * 0.885, PI / 2, -PI / 2.1);

  }
}