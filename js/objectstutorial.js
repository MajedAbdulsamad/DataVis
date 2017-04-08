var nervousBall= [];
var blackhole;


function setup(){
	createCanvas(2400,3600);
	for (var i = 0; i < 10; i++) {
nervousBall.push(new Jitter());
blackhole=createVector(800,800);
}
}

function Jitter(){
//properties for object
this.position=createVector(random(0,width),random(0,height));
	this.diameter=random(50,150);
	fill(255);
	this.speed=random(-1,1);
	this.movement=random(-2,-2);
	this.panic= false;
this.direction= createVector(random(-1,1), random(-1,1));
// functions for object

this.display=function(){
	ellipse(this.position.x,this.position.y,this.diameter,this.diameter);
	if (this.panic== false){
		this.diameter= 50;
	}
	else{
		this.diameter=(10);
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
var distance= this.position.dist(blackhole);
if (distance>100){
	this.panic=true;
}
else{
	this.panic=false;
}
}
   }
}
function draw(){
background(0,138,138);
	for (var i = 0; i < 10; i++) {
		nervousBall[i].display();
		nervousBall[i].update();
		nervousBall[i].move();
		nervousBall[i].calculateDistance();
	};
fill(255);
	ellipse(blackhole.x,blackhole.y,150,150);
	
}