function setup() {
  let save = createCanvas(600, 600);
  face();
}

function draw() {  
  if (mouseIsPressed) {
    var size = random(5, 20);
    var a = random(0, 255);
    noFill();
    stroke(180, a, a);
    
    for(var cnt=0; cnt<10; cnt++) {
      var x = random(-10, 10);
      var y = random(-10, 10);
      ellipse(mouseX+x, mouseY+y, size, size);
    }
  }
  
  if (keyIsPressed) {
    face() ;
  }
  
  if (keyCode === SHIFT) {
    saveCanvas(save,'my_customer','jpg');
  }
}

function face(){
  background(173, 187, 211); //199,203,227
  
  let s1 ="Press any key to erase!";
  let s2 ="Press SHIFT key to save!";
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(s1, 300, 540);
  text(s2, 300, 570);
  
  stroke(0);
  fill(255, 242, 224); // face color
  ellipse(300, 300, 400, 400);  //face
  noStroke();

  fill(250, 189, 182); // nose color
  ellipse(300,300,30,30);  //nose
  
  fill(0); // eyes color
  ellipse(200, 280, 45, 45);  //left eye
  ellipse(400, 280, 45, 45);  //right eye
  
  fill(255); // eyes deco color
  ellipse(190, 270, 15, 15);  //left eye deco
  ellipse(390, 270, 15, 15);  //right eye deco
  
  fill(193, 74, 90); // mouth color
  triangle(220, 350, 380, 350, 300, 420); // mouth
  
  fill(250, 157, 167); // cheek color
  ellipse(175, 320, 40, 20);  //left cheek
  ellipse(425, 320, 40, 20);  //right cheek
}