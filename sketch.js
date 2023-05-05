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

let semicirculo = [];

function setup() {
  createCanvas(windowHeight, windowHeight);

  let semicirculo0 = new Forma(855, height); // Semicirculo (con línea) inferior
  let semicirculo1 = new Forma(855, 0); // Semicirculo (con línea) superior
  semicirculo.push(semicirculo0);
  semicirculo.push(semicirculo1);
}

function draw() {
  background(200);
  semicirculo[0].display();
  dibujarLineasLaterales();
  semicirculo[1].display();
}

function dibujarLineasLaterales() {
  stroke(25);
  line(57, 0, 57, width);
  line(height - 57, 0, height - 57, width);
}