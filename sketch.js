function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 120, 120);

  strokeWeight(2);

  // draw a row of stars
  for (let x = 50; x < width; x += 80) {
    star(x, 50, 80, 8);
  }

  // draw a column of stars
  for (let y = 50; y < height; y += 100) {
    star(50, y, 100, 10);
  }

  // draw a column of rows
  for (let y = 200; y < height; y += 100) {
    // draw a row of stars
    for (let x = 200; x < width; x += 100) {
      star(x, y, 100, 15);
    }
  }
}

function draw() {}
