var myData = [52,51,49,45,41];
 var labels = ['Real Madrid', 'Barcelona', 'Sevilla', 'Atletico madrid', 'Real Sociedad'];


function setup() {
   createCanvas(800,800);
   textAlign(LEFT,TOP);
   textSize(18); 
   console.log('shaghal')
}

function draw(){
	background(225);
	fill(15);
	noStroke();

	for (var i = 0; i < myData.length; i++) {
	 rect(150, 2+ 75 * i, myData[i] * 5, 50);
	}
	for (var i = 0; i < labels.length; i++) {
		text(labels[i], 425, 75*i);

	}
}

// function draw(){
//   if (mouseIsPressed){
//     fill(0);
//  }
//  else {
//   fill(225);
//   }
//   ellipse(mouseX, mouseY, 50, 50);
// }
