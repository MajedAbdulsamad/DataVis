var refugeesUNHCRTable;
var topRefugeesTable= new p5.Table;
var asyleesTable= new p5.Table;
var maxTotal=50;
var maxLabel = 50;
var maxLength= 500;
var headers = ['Country', 'Refugees', 'Asylum-seekers', 'IDPs', 'Returned IDPs', 'Stateless', 'Others of concern', 'Total']


function preload(){
	refugeesUNHCRTable=loadTable('../Data/RefugeesUNHCR.csv', 'csv', 'header');
	console.log('refugeesUNHCRTable loaded');
}

function setup(){
	createCanvas(800,4000);
	textAlign(CENTER, TOP);
	fill(0);
	textSize(14); 
	console.log('Setup Complete')
	print(refugeesUNHCRTable.getRowCount() + 'rows added')
	print(refugeesUNHCRTable.getColumnCount() + 'Columns added')
	for (var i = 0; i < refugeesUNHCRTable.getRowCount(); i++) {
		maxTotal = max(refugeesUNHCRTable.getNum(i, 'Total'), maxTotal);
		maxLable = max(refugeesUNHCRTable.getString(i,'Country').length, maxLabel);
		print('Max Total is' + maxTotal);
		print('Max label Length is' + maxLabel);
		// createNewTable();
	}
// }
// function createNewTable(){
// 	asyleesTable.addColumn('Country');
// 	asyleesTable.addColumn('Asylum-seekers');
// 	for (var i = 0; i < refugeesUNHCRTable.getRowCount(); i+1) {
// 		refugeesUNHCRTable.getNum(i, 'Asylum-seekers');
// 		refugeesUNHCRTable.getString(i, 'Country');

// 	}

}


function draw(){
background (255);
fill(100);
noStroke();
for (var i = 0; i < refugeesUNHCRTable.getRowCount(); i++) {
	var total = refugeesUNHCRTable.getNum(i, 'Total');
	var length = map(total, 0, maxTotal, 0, maxLength);
    rect(maxLabel *7, 20*i, length, 6);
    // text(nfc(total, 0), maxLabel*5 + length + 5, 20*i);
   
}
for (var i = 0; i < refugeesUNHCRTable.getRowCount(); i++) {
	text(refugeesUNHCRTable.getString(i, 'Country'), maxLabel * 5 - 5, 20*i);

 }
}



// for (var i = 0; i < refugeesUNHCRTable.getRowCount(); i++) {
// 	var total = refugeesUNHCRTable.getNum(i, 'Total');
// 	var length = map(total, 0, maxTotal, 0, maxLength);
//     rect(maxLabel *7, 20*i, length, 6);
//   }






