function rectangulo(posicion) {
  strokeWeight(width/8.7); //anchura de las líneas
  strokeCap(SQUARE); //puntas de las líneas (cuadradas)

  if (posicion === 'arriba') { // listo

    stroke(50);
    line(width - width * 0.99, 0 + height * 0.03, width - 7, 0 + height * 0.03);

  } else if (posicion === 'abajo') { //listo

    stroke(50);
    line(width - width * 0.99, height - height * 0.02, width - 7, height - height * 0.02);

  } else if (posicion === 'derecha') { //listo

    stroke(50);
    line(width - width * 0.943, 0, width - width * 0.943, height);

  } else if (posicion === 'izquierda') { //listo

    stroke(50);
    line(width - width * 0.056, 0, width - width * 0.056, height);

  }
}

function circulo(posicion) {
  if (posicion === 'arriba') {

    stroke(100);
    noFill();
    ellipse(width / 2, 0, width * 0.885, height * 0.885);

  } else if (posicion === 'abajo') {

    stroke(100);
    noFill();
    ellipse(width / 2, height, width * 0.885, height * 0.885);

  }
}