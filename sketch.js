let semicirculo = [];

let pg;

function setup() {
  createCanvas(windowHeight, windowHeight);

  pg = createGraphics(width, height);

  let semicirculo0 = new Forma(855, height); // Semicirculo (con línea) inferior
  let semicirculo1 = new Forma(855, 0); // Semicirculo (con línea) superior
  semicirculo.push(semicirculo0);
  semicirculo.push(semicirculo1);
}

function draw() {
  background(200);

  pg.push(); // capa 0
  semicirculo[0].display();
  pg.pop();
  
  pg.push(); // capa 1
  dibujarLineasLaterales();
  pg.pop();
  
  pg.push(); // capa 2
  semicirculo[1].display();
  pg.pop();
}

function dibujarLineasLaterales() {
  stroke(25);
  line(57, 0, 57, width);
  line(height - 57, 0, height - 57, width);
}