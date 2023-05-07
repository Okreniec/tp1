function circulo(posicion) {
    if (posicion === 'arriba') {
      stroke(100);
      noFill();
      ellipse(width / 2, 0, width, height);
    } else if (posicion === 'abajo') {
      stroke(100);
      noFill();
      ellipse(width / 2, height, width, height);
    }
}