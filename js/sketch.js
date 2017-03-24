var refugeeTable;
var topRefugeesTable = new p5.Table;
var maxTotal = 0;
var maxLabel = 0;
var maxLength = 500;
var headers = ['Country','Refugees','Asylum-seekers','Returned refugees','IDPs','Returned IDPs','Stateless','Others of concern','Total']
var startChartY=125;
var startChartX=250;
var selectedButton =5;




// ***** Preload function ***** //
function preload(){
    refugeeTable = loadTable('../data/RefugeesUNHCR.csv', 'csv', 'header');
    console.log('Done loading table...');
}

// ***** Setup function ***** //
function setup(){
    createCanvas(1000, 3000);
    textSize(12);
    console.log('Setup complete...');
    print(refugeeTable.getRowCount() + ' rows loaded...');
    print(refugeeTable.getColumnCount() + ' columns loaded...');
    for (var i = 0; i < refugeeTable.getRowCount(); i++) {
        maxTotal = max(refugeeTable.getNum(i, 'Total'), maxTotal);
        maxLabel = max(refugeeTable.getString(i, 'Country').length, maxLabel);
    }
    print('Maximum total is ' + maxTotal);
    print('Maximum label length is ' + maxLabel);
    createNewTable();
}

// ****** Create new table function ******** //
function createNewTable(){
    for (var i = 0; i < headers.length; i++) {
        topRefugeesTable.addColumn(headers[i]);
    }
    for (var i = 0; i < refugeeTable.getRowCount(); i++) {
        var totalRefugees = refugeeTable.getNum(i, 'Total');
        if (totalRefugees >= 100000) {
            var newRow = topRefugeesTable.addRow()
                        for (var j = 0; j < headers.length; j++) {
                            newRow.setString(headers[j], refugeeTable.getString(i, headers[j]));
                        }
        }
    }
    print('New top refugee table created...');
        print(topRefugeesTable);
}

function drawButtons(){
    
    for (var i = 1; i < headers.length; i++) {
        if (selectedButton== i) {
            fill(0,138,138)
        }
        else {
            noFill();
        }
        stroke(0);
        strokeWeight(1);
        ellipse(75 + 80* i, 60, 50, 50)
        fill(0,0,0);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(9);
        text(headers[i], 75+80*i, 100)
        };

}

function showDetails(){
    if (mouseY>101){
    var selectedRow=0;
    selectedRow = floor((mouseY- 100) / 14);
    fill(0);
    textSize(18);
    text(topRefugeesTable.getString(selectedRow, 'Country'), 250, 150);
    text(topRefugeesTable.getNum(selectedRow, 'Total'), 250, 180);
    text(topRefugeesTable.getNum(selectedRow, 'Asylum-seekers'), 250, 210);
    
}
}

function mousePressed(){
    if (mouseX > 130 && mouseX < 180 && mouseY > 25 && mouseY < 80){
    selectedButton = 1;
  }
  if (mouseX > 208 && mouseX < 260 && mouseY > 25 && mouseY < 80){
    selectedButton = 2;
  }
  if (mouseX > 290 && mouseX < 340 && mouseY > 25 && mouseY < 80){
    selectedButton = 3;
  }
  if (mouseX > 370 && mouseX < 420 && mouseY > 25 && mouseY < 80){
    selectedButton = 4;
  }
  if (mouseX > 450 && mouseX < 500 && mouseY > 25 && mouseY < 80){
    selectedButton = 5;
  }
  if (mouseX > 530 && mouseX < 580 && mouseY > 25 && mouseY < 80){
    selectedButton = 6;
  }
  if (mouseX > 600 && mouseX < 660 && mouseY > 25 && mouseY < 80){
    selectedButton = 7;
  }
  if (mouseX > 690 && mouseX < 740 && mouseY > 25 && mouseY < 80){
    selectedButton = 8;
  }


}

function drawCountries(category){
    fill(0,138,138);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(10);
    maxTotal=0;
      for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
      maxTotal = max(maxTotal, topRefugeesTable.getNum(i, category));
    }
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
        var total = topRefugeesTable.getNum(i, category);
        var length = map(total, 0, maxTotal, 0, maxLength);
        rect(startChartX + maxLabel * 5, startChartY + 2 + 14*i, length, 12);
        text(nfc(total, 0), startChartX + maxLabel * 5 + length + 5, startChartY + 14*i);
    }
    textAlign(RIGHT, TOP);
    for (var i = 0; i < topRefugeesTable.getRowCount(); i++) {
        text(topRefugeesTable.getString(i, 'Country'), startChartX + maxLabel * 4 - 5, startChartY + 14*i);
    }
}

// ***** Draw function ***** //
function draw(){
    background(255);
    // drawCountries(refugeeTable);
    drawCountries(headers[selectedButton]);
    drawButtons();
    noStroke();
    fill(0);
    showDetails();
    text(str(round(mouseX)) + ',' + str(round(mouseY)), mouseX, mouseY)

}