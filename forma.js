class Forma {
    constructor(diametro, y) {
      this.diametro = diametro;
      this.y = y;
    }
  
    display() {
      strokeWeight(115);
      strokeCap(SQUARE);
    
      if (this.y < height/2) {
        stroke(50);
        line(10, this.y + 30, width - 10, this.y + 30); // Linea de Arriba
      } else {
        stroke(50);
        line(10, this.y - 20, width - 10, this.y - 20); // Linea de Abajo
      }
  
      stroke(100);
      noFill();
      ellipse(width/2, this.y, this.diametro, this.diametro);
    }
  }