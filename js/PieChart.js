var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];
var refugeesTable;

function preload(){
  refugeesUNHCRTable=loadTable('../Data/RefugeesUNHCR.csv', 'csv', 'header');
  console.log('refugeesUNHCRTable loaded');
}

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop();  // Run once and stop
}

function draw() {
  background(255);
  pieChart(350, angles);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < refugeesTable.getNum(); i++) {
    var gray = map(i, 0, refugeesTable.getNum, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}