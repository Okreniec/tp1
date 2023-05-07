function rectangulo(posicion) { //Rectangulos terminados
  strokeWeight(width/8.7); //anchura de las líneas
  strokeCap(SQUARE); //puntas de las líneas (cuadradas)

  if (posicion === 'arribaIzq') { //listo
    noStroke();
    fill(60);
    quad(0, 0,
    width / 2, 0,
    width / 2, height / 11.4,
    width / 8.8, height / 11.4);

  }  else if (posicion === 'arribaDer'){ //listo
    noStroke();
    fill(60);
    quad(width / 2.01, 0,
    width, 0,
    width - width / 8.8, height / 11.4,
    width / 2.01, height / 11.4);

  } else if (posicion === 'abajoIzq') { //listo
    noStroke();
    fill(40);
    quad(width / 8.8, height - height / 11.4,
    width / 2, height - height / 11.4,
    width / 2, height,
    0, height);

  } else if (posicion === 'abajoDer') { //listo
    noStroke();
    fill(40);
    quad(width / 2.01, height - height / 11.4,
    width - width / 8.8, height - height / 11.4,
    width, height,
    width / 2.01, height);

  } else if (posicion === 'derechaSup') { //listo
    noStroke();
    fill(70);
    quad(width, height / 2,
    width, -1,
    width - width / 8.8, height / 11.5,
    width - width / 8.8, height / 2);

  } else if (posicion === 'derechaInf') { //listo
    noStroke();
    fill(70);
    quad(width - width / 8.8, height / 2.01,
    width - width / 8.8, height - height / 11.5,
    width, height+1,
    width, height / 2.01);

  } else if (posicion === 'izquierdaSup') { //listo
    noStroke();
    fill(30);
    quad(0, -1,
    0, height / 2,
    width / 8.8, height / 2,
    width / 8.8, height / 11.5);

  } else if (posicion === 'izquierdaInf') { //listo
    noStroke();
    fill(30);
    quad(width / 8.8, height - height / 11.5,
    width / 8.8, height / 2.01,
    0, height / 2.01,
    0, height+1);
  
  }
}

function circulo(posicion) { //semicirculos terminados
  if (posicion === 'arribaDer') {
    stroke(0);
    noFill();
    arc(width / 2, 0, width - width / 8.7 , height - height / 8.7, -PI / 2, PI / 2);

  } else if (posicion === 'arribaIzq') {
    stroke(50);
    noFill();
    arc(width / 2, 0, width - width / 8.7 , height - height / 8.7, PI / 2.005, -PI / 2);

  } else if (posicion === 'abajoDer') {
    stroke(100);
    noFill();
    arc(width / 2, height, width - width / 8.7 , height - height / 8.7, -PI / 2, PI / 2);

  } else if (posicion === 'abajoIzq') {
    stroke(150);
    noFill();
    arc(width / 2, height, width - width / 8.7 , height - height / 8.7, PI / 2, -PI / 2);

  }
}