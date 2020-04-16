var sun, sunImage;
var plt1,plt1IMage, plt2,plt2Image, plt3,plt3Image;

function setup()  {
  var canvas =  createCanvas(600,600);

  sun = createSprite(300,300,50,50);
  sunImage = loadImage("sun.png");

  plt1 = createSprite(150,100,20,10);
  plt1Image = loadImage("plt1.png");
  plt2 = createSprite(150,250,20,10);
  plt2Image = loadImage("plt2.png")
  plt3 = createSprite(450,100,20,10);
  plt3Image = loadImage("plt3.png");
}
function draw() {
  background(0);
  console.log(sun.width);
  sun.addAnimation("sun",sunImage);
  plt1.addAnimation("planet",plt1Image);
  plt1.scale = 0.5;
  plt2.addAnimation("planet",plt2Image);
  plt2.scale = 0.5;
  plt3.addAnimation("planet", plt3Image);
  plt3.scale = 0.5;

  if(frameCount%10 === 0) {
    sun.scale = sun.scale + 0.1;
  }
  if(sun.collide(plt1)) {
    plt1.destroy();
  }
  else if(sun.collide(plt2))  {
    plt2.destroy();
  }
  else if(sun.collide(plt3))  {
    plt3.destroy();
  }

  if(sun.width>600) {
    sun.destroy();
  }
  drawSprites();  
 
}