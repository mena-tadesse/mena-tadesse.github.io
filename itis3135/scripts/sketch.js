function setup() {
    createCanvas(625, 400);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 20, 20);
}

function clearSketch(){
    clear();
}
