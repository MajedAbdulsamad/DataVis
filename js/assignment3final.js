// ***** Global variables ***** //

var victimTable;
var maxTotal=0;
var maxLength=500;
var maxLabel= 0; 

function preload() { 
victimTable = loadTable('../Data/ColombianWar.csv','csv', 'header');
console.log('TableLoaded');
}



// ***** Setup function ***** //
function setup(){
  createCanvas (500,500);
  textAlign(RIGHT, TOP);
  textSize(18);
  console.log('Setup worked');
  print(victimTable.getRowCount())
  print(victimTable.getColumnCount())
  for (var i = 0; i < victimTable.getRowCount(); i++) {
    maxTotal = max(victimTable.getNum(i, 'Total'), maxTotal);
    maxLabel = max(victimTable.getString(i, 'Municipality').length, maxLabel);
  }
  print('maximum total is ' + maxTotal);
  print('maximum label length is ' + maxLabel);
}

function draw(){
background(0)
  rect(10,10)
}

  // background(200);
  // fill(0);
  // noStroke();
  // textAlign(RIGHT,TOP);
  // for (var i = 0; i < victimTable.getRowCount(); i++){
  //  var total = victimTable.getNum(i, 'Total');
  //  var length = map(total, 0, maxTotal, 0, maxLength);
  //  rect(maxLabel * 5, 2 + 20*i, length, 12);
  //   text(total.toLocaleString('en-US', 
  //     {minimumFractionDigits: 0}), maxLabel * 4 + length + 125, 20*i);
  // }
  // textAlign(RIGHT, TOP);
  // for (var i = 0; i < victimTable.getRowCount(); i++) {
  //   text(victimTable.getString(i, 'Municipality'), maxLabel * 5 - 5, 20*i);
  // }


// }



 
// /   // Drawing the labels
//   for (var i = 0; i < labels.length; i++) {
//     text(labels[i], 10, 20*i);
//   }
// }