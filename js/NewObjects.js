var nervousBall= [];
var Damascus;
var img;
var Homs;
var Aleppo;


function setup(){
	createCanvas(4580,2000);
	img = loadImage("../img/Syria.jpg"); 
	for (var i = 0; i < 2500; i++) {
nervousBall.push(new Jitter());
Damascus=createVector(1950,1250);
Homs=createVector(2000,1050);
Aleppo=createVector(2100,800);
}
}

function Jitter(){
//properties for object
this.position=createVector(random(0,width),random(0,height));
	this.diameter=random(10,50);
	fill(255);
	this.speed=random(2,8);
	this.movement=random(-5,-2);
	this.panic= false;
	  this.maxForce = 5;
  var gravity = 0.12;
  var distBlackhole;
  var influenceArea = 200;
  var targetBlackhole;
  var inRange = false;
this.direction= createVector(random(-1,1), random(-1,1));
// functions for object

this.display=function(){
	ellipse(this.position.x,this.position.y,this.diameter,this.diameter);
	if (this.panic== false){
		this.diameter= 0;
	}
	else{
		this.diameter=(10);
	}
}
this.update=function(){
		this.position=this.position.add(this.direction);
		if (this.position.x>width) {
			this.position.x=0
		};
		if (this.position.x<0) {
			this.position.x=width
		};
	if (this.position.y>height) {
			this.position.y=0
		};
		if (this.position.y<0) {
			this.position.y=height
		};
	}

this.move=function(){
	this.position.x=this.position.x+this.movement;
	this.position.y=this.position.y+this.movement;
}
this.calculateDistance=function(){
var distance= this.position.dist(Damascus);
if (distance>100){
	this.panic=true;
}
else{
	this.panic=false;
}
var distance= this.position.dist(Homs);
if (distance>100){
	this.panic=true;
}
else{
	this.panic=false;
}
var distance= this.position.dist(Aleppo);
if (distance>100){
	this.panic=true;
}
else{
	this.panic=false;
}

}
}
function draw(){

  noStroke();
	  image(img, 800 ,-400,928*3, 928*3);

	for (var i = 0; i < 2500; i++) {
		nervousBall[i].display();
		nervousBall[i].update();
		nervousBall[i].move();
		nervousBall[i].calculateDistance();
	};
fill(220);
	ellipse(Damascus.x,Damascus.y,50,50);
	ellipse(Aleppo.x,Aleppo.y,50,50);
	ellipse(Homs.x,Homs.y,50,50);
fill(255);
	rect(100,0,0,100);	

}