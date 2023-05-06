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