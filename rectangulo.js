function rectangulo(posicion) {
  strokeWeight(115);
  strokeCap(SQUARE);

  if (posicion === 'arriba') {
    stroke(50);
    line(width - width/0.2, 0, width - 7, 0); // Linea de Arriba
  } else if (posicion === 'abajo') {
    stroke(50);
    line(width - width/0.99, height - 20, width - 7, height - 20); // Linea de Abajo
  } else if (posicion === 'derecha') {
    stroke(50);
    line(height - 57, 0, height - 57, width); // Linea de Abajo
  } else if (posicion === 'izquierda') {
    stroke(50);
    line(57, 0, 57, width); // Linea de Abajo
  }
}