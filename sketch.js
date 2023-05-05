class Forma {
  constructor(diametro, y) {
    this.diametro = diametro;
    this.y = y;
  }

  display() {
    noFill();
    stroke(100);
    strokeWeight(115);
    ellipse(width/2, this.y, this.diametro + 20, this.diametro);

    line(70, this.y + 30, width - 70, this.y + 30);
    line(70, height - 30, width - 70, height - 30);

    stroke(0);
    line(57, 0, 57, width);
    stroke(205);
    line(height  - 57, 0, height - 57, width);
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

  semicirculo.forEach(semicirculo => semicirculo.display());
}