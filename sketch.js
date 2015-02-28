var bhsl, bssl, bbsl;
var dhsl, dssl, dbsl;

var img;

var r = [];
var g = [];
var b = [];

var startup = true;

function preload() {
    img = loadImage("assets/dress.png");
}

function setup() {
  createCanvas(1600, 800);

  bhsl = createSlider(0, 255, 140);
  bhsl.position(20, 370);
  bssl = createSlider(0, 255, 20);
  bssl.position(20, 390);
  bbsl = createSlider(0, 255, 200);
  bbsl.position(20,410);

  dhsl = createSlider(0, 255, 130);
  dhsl.position(20, 440);
  dssl = createSlider(0, 255, 40);
  dssl.position(20, 460);
  dbsl = createSlider(0, 255, 40);
  dbsl.position(20,480);

    img.loadPixels();
  colorMode(RGB, 255, 255, 255);
  for (var y = 0; y < img.height; y++)
  {
    for (var x = 0; x < img.width; x++)
    {
     var index = y*img.width + x
     var i = 4*index;
     
     r[index] = img.pixels[i];
     g[index] = img.pixels[i+1];
     b[index] = img.pixels[i+2];
    
    }
  }
}

function draw() {

  img.loadPixels();
  for (var y = 0; y < img.height; y++)
  {
    for (var x = 0; x < img.width; x++)
    {
      var index = y*img.width + x
      var i = 4*index;

      colorMode(RGB, 255, 255, 255);
      var c = color(r[index],g[index],b[index]);

     var h = hue(c) + dhsl.value();
     if (h > 255){
       h = h + 100;
     }
     var s = saturation(c) + dssl.value();
     var bri = brightness(c) + dbsl.value();
     colorMode(HSB, 255, 255, 255);
     var cc = color(h,s,bri);
     img.pixels[i] = red(cc);
     img.pixels[i+1] = green(cc);
     img.pixels[i+2] = blue(cc);       

    }
  }
  colorMode(HSB, 255, 255, 255);
  bg = color(bhsl.value(),bssl.value(),bbsl.value());
  background(bg);
  img.updatePixels();
  image(img,0,0);

  noStroke();
  if (bbsl.value() > 180) {
    fill(10);
  } else {
    fill(240);
  }
  text("bg hue", 190, 375);
  text("bg sat", 190, 395);
  text("bg bri", 190, 415);
  text(bhsl.value(), 150, 375);
  text(bssl.value(), 150, 395);
  text(bbsl.value(), 150, 415);

  text("dress hue", 190, 445);
  text("dress sat", 190, 465);
  text("dress bri", 190, 485);
  text(dhsl.value()/2 -128, 150, 445);
  text(dssl.value()/2 -128, 150, 465);
  text(dbsl.value()/2 -128, 150, 485);

}

