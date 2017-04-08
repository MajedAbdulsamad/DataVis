// ***** Global variables ***** //
var weatherData;
var apiKey = '176d293c90dad47eec4535f35ec1a4fb';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var units = 'imperial';
var selectedCity= ['San Francisco','Chicago','New York','Paris','Beirut','Cairo'];
var j=0;
var selectedButton=0;
var temperature=0;
var city;
var request;
var img;



// ***** Setup function ***** //
function setup() {
  createCanvas(2000, 2000);
  img = loadImage("../img/wm4.jpg");  // Load the image
}


function APIquery(){ 
   request = baseURL + selectedCity[j] + '&units=' + units + '&apikey=' + apiKey;
    loadJSON(request, getWeatherData);
    
}

// function makeBase()
// {
//   base_image = new Image();
//   base_image.src = '../img/WorldMap.jpg';
//   base_image.onload = function(){
//   context.drawImage(base_image, 100, 100);
//   }
// }

function getWeatherData(apiData){
  weatherData = apiData;
  temperature=(weatherData.main.temp);
  console.log(weatherData.main.temp+'temperature for city');
 
}


function drawButtons(){
    
    for (var i = 0; i < selectedCity.length; i++) {
        if (selectedButton== i) {
            fill(255,255,255);
            
        }
        else {

            noFill()

        }
        stroke(5);
        ellipse(450 , 350, 50, 50)
        ellipse(650 , 300, 50, 50)
        ellipse(750 , 380, 50, 50)
        ellipse(1150 , 380, 50, 50)
ellipse(1300 , 450, 50, 50)
ellipse(1260 , 500, 50, 50)

        };

}

function updateApiRequest(){
  request = baseURL + selectedCity[j] + '&units=' + units + '&apikey=' + apiKey;
  loadJSON(request, getWeatherData);
}

function mousePressed(){
  if (mouseX > 420 && mouseX < 470 && mouseY > 330 && mouseY < 380){
    selectedButton = 0; j=0;
    updateApiRequest();
     // request = baseURL + selectedCity[j] + '&units=' +
     // units + '&apikey=' + apiKey;
     // print(request);
     // loadJSON(request, getWeatherData);
  }
  if (mouseX > 620 && mouseX < 680 && mouseY > 270 && mouseY < 330){
    selectedButton = 1; j=1;
        updateApiRequest();
}

  if (mouseX > 710 && mouseX < 780 && mouseY > 350 && mouseY < 410){
    selectedButton = 2;j=2;         updateApiRequest();

  }
  if (mouseX > 1120 && mouseX < 1180 && mouseY > 350 && mouseY < 410){
    selectedButton = 3;j=3;        updateApiRequest();

  }
  if (mouseX > 1260 && mouseX < 1320 && mouseY > 400 && mouseY < 480){
    selectedButton = 4;j=4;        updateApiRequest();

  }
  if (mouseX > 1220 && mouseX < 1270 && mouseY > 450 && mouseY < 520){
    selectedButton = 5;j=5;
        updateApiRequest();
  }
  
}



// function showDetails(){
//     if (mouseY>101){
//     var selectedRow=0;
//     selectedRow = floor((mouseY- 100) / 14);
//     fill(0);
//     textSize(18);
//     text(topRefugeesTable.getString(selectedRow, 'Country'), 250, 150);
//     text(topRefugeesTable.getNum(selectedRow, 'Total'), 250, 180);
//     text(topRefugeesTable.getNum(selectedRow, 'Asylum-seekers'), 250, 210);
    
// }
// }

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 100 ,0,1944, 1228);
  
    fill(150);
    drawButtons();
    textSize(24);
    textAlign (LEFT, RIGHT);
    if (weatherData) {
      fill(0,138,138)
      text('The current temperature in ',800,300);
      textSize(48);
      fill(0,150,150);
      text(selectedCity[j],850,350);
      textSize(24) ;
      fill(0,138,138);
      text(' is ',900,375);
      textSize(60) ;
      fill(0,138,138);
      text(temperature, 900,450);
    }
    else {
      text('Select a city to begin', 800, 400);
    }

      // text(str(mouseX) + ', ' + str(round(mouseY)), mouseX, mouseY);

}
