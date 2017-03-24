var dimensionX = 80
var dimensionY = 40

function setup () {
    createCanvas(3000,1500);

}

function drawCubes(xPos, yPos) {

    background(200);
    colorMode (HSB, 100);

    for (var i = 0; i < dimensionX; i++) {
        for (var j = 0; j < dimensionY; j++) {

            noStroke ();

            var hue = i*2;
            var saturation = j*2;

            // fill(hue, saturation,100);

            
            var cubeX= i*25;
            var cubeY=j*25;

            var x2= xPos;
            var y2= yPos;

            var d= int(dist(cubeX, cubeY, x2, y2));

            fill(d/25,saturation,5);
            ellipse(cubeX, cubeY, d/10, d/10);
        }
    }
}

function draw () {
    drawCubes (mouseX, mouseY);
}