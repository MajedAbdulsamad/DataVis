// ***** Global variables ***** //

var refugeeTable;
var maxTotal=0;
var maxLength=500;
var maxLabel= 0;

function preload() { 
refugeeTable = loadTable('../Data/RefugeesUNHCR.csv','csv', 'header');
console.log('TableLoaded');
}



// ***** Setup function ***** //
function setup(){
  createCanvas (1200,5000);
  textAlign(RIGHT, TOP);
  textSize(18);
  console.log('Setup worked');
  print(refugeeTable.getRowCount())
  print(refugeeTable.getColumnCount())
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
    maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
  }
  print('maximum total is ' + maxTotal);
  print('maximum label length is ' + maxLabel);
}

function draw(){
  background(200);
  fill(0);
  noStroke();
  textAlign(RIGHT,TOP);
  for (var i = 0; i < refugeeTable.getRowCount(); i++){
   var total = refugeeTable.getNum(i, 'Total');
   var length = map(total, 0, maxTotal, 0, maxLength);
   rect(maxLabel * 5, 2 + 20*i, length, 12);
    text(total.toLocaleString('en-US', 
      {minimumFractionDigits: 0}), maxLabel * 4 + length + 125, 20*i);
  }
  textAlign(RIGHT, TOP);
  for (var i = 0; i < refugeeTable.getRowCount(); i++) {
    text(refugeeTable.getString(i, 'Country'), maxLabel * 5 - 5, 20*i);
  }
 // if(refugeeTable.getNum < 1000){
 //    refugeeTable.style.backgroundColor = 'green';
 //  } else if(refugeeTable.getNum >= 1000 && refugeeTable.getNum <= 1000000){
 //    refugeeTable.style.backgroundColor = 'orange';
 //  }

}



 
// /   // Drawing the labels
//   for (var i = 0; i < labels.length; i++) {
//     text(labels[i], 10, 20*i);
//   }
// }