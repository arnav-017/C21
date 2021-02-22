var earth;
var sun;

var widths = 90;

var frame = 5;

function draw() {
 frameRate(frame);
 var canvas = createCanvas(1200,700); 
  background(23, 50, 100);

  fill(255, 204, 0);
  sun = circle(600,320,widths);
 
  earth = new Earth(0, 0, 50, 50);
  earth.display();
  
  widths = widths + 2;
   frame = frame + 2;

   if(frame > 440){
    clear();
    background(255,204,0);
   
  }
  
} 