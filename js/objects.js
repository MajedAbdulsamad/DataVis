// ***** Global variables ***** //
var nervousBall = []; // Declaring the Array of objects
var blackWholes = [];

// ***** Setup function ***** //
function setup(){
  createCanvas(3400, 1400);
  colorMode(HSB, 360, 100, 100, 100);
  for (var i = 0; i < 200; i++) {
    nervousBall.push(new Jitter()); // Create the objects
  }
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 10; j++) {
      blackWholes[j + i * 5] = createVector(20 + width / 5 * j, 20 + height / 5 * i);
    }
  }
}

// ***** Draw function ***** //
function draw(){
  // background(255);
  fill(0, 100, 100, 5);
  noStroke();
  // rect(0, 0, width, height);
  for (var i = 0; i < nervousBall.length; i++) {
    nervousBall[i].display();
    nervousBall[i].calculateDistance();
    nervousBall[i].update();
  }
  stroke(0);
  strokeWeight(1);
  noFill();
  // for (var i = 0; i < blackWholes.length; i++) {
  //   ellipse(blackWholes[i].x, blackWholes[i].y, 100, 100);
  // }
}

// ***** Jitter class ******* //
function Jitter() {
  // Initial properties
  this.position = createVector(random(width), random(height));
  //SPECIFY CITY LOCATION AS STARTNG POINT
  this.diameter = random(1, 2);
  this.maxVelocity = 10;
  this.velocity = createVector(random(-this.maxVelocity, this.maxVelocity),random(-this.maxVelocity, this.maxVelocity));
  this.fill = 200;
  this.maxForce = 5;
  var gravity = 0.12;
  var distBlackWhole;
  var influenceArea = 200;
  var targetBlackWhole;
  var inRange = false;

  // Function
  this.display = function(){
    noStroke();
    fill(this.fill, 100, 100, 100);
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
  this.calculateDistance = function(){
    inRange = false;
    for (var i = 0; i < blackWholes.length; i++) {
      distBlackWhole = this.position.dist(blackWholes[i]);
      if (distBlackWhole < influenceArea){
        inRange = true;
        targetBlackWhole = i;
      }
    }
  }
  this.update = function(){
    if (inRange){
      var steerVector = p5.Vector.sub(blackWholes[targetBlackWhole], this.position);
      steerVector.limit(gravity);
      this.velocity.sub(steerVector);
      this.velocity.limit(this.maxForce);
      this.position.add(this.velocity);
    }
    else{
      this.position.add(this.velocity);
    }
    if (this.position.x > width){
      this.position.x = 0;
    }
    if (this.position.y > height){
      this.position.y = 0;
    }
    if (this.position.x < 0){
      this.position.x = width;
    }
    if (this.position.y < 0){
      this.position.y = height;
    }
  }
}