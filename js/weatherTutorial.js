// ***** Global variables ***** //
var weatherData;
var apiKey = '176d293c90dad47eec4535f35ec1a4fb';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var units = 'imperial';
var selectedCity= ['Chicago','New York','Bogota','Paris','Catania','Beirut','Damascus','Tokyo','Sydney',
'Toronto', 'San Fran', 'Tunisia', 'Cairo','Tehran','Casablanca'];
var j=0;
var selectedButton=0;
var temperature=0;
var city;
var request;




// ***** Setup function ***** //
function setup(){
    createCanvas(1250, 1250); 
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
            fill(0,138,138);
            
        }
        else {

            fill(235)

        }
        stroke(0);
        noStroke();
        ellipse(75 + 80* i, 60, 50, 50)
        fill(100);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(18);
        text(selectedCity[i], 75+80*i, 100)
        };

}

function mousePressed(){
  if (mouseX > 130 && mouseX < 180 && mouseY > 25 && mouseY < 80){
    selectedButton = 1; j=1; 
  }
  if (mouseX > 208 && mouseX < 260 && mouseY > 25 && mouseY < 80){
    selectedButton = 2;j=2; 
  }
  if (mouseX > 290 && mouseX < 340 && mouseY > 25 && mouseY < 80){
    selectedButton = 3;j=3;
  }
  if (mouseX > 370 && mouseX < 420 && mouseY > 25 && mouseY < 80){
    selectedButton = 4;j=4;
  }
  if (mouseX > 450 && mouseX < 500 && mouseY > 25 && mouseY < 80){
    selectedButton = 5;j=5;
  }
  if (mouseX > 530 && mouseX < 580 && mouseY > 25 && mouseY < 80){
    selectedButton = 6;j=6;
  }
  if (mouseX > 600 && mouseX < 660 && mouseY > 25 && mouseY < 80){
    selectedButton = 7;j=7;
  }
  if (mouseX > 690 && mouseX < 740 && mouseY > 25 && mouseY < 80){
    selectedButton = 8;j=8;
  }
  if (mouseX > 770 && mouseX < 830 && mouseY > 25 && mouseY < 80){
    selectedButton = 9;j=9;
  }
  if (mouseX > 860 && mouseX < 920 && mouseY > 25 && mouseY < 80){
    selectedButton = 10;j=10;
  }
  if (mouseX > 940 && mouseX < 1000 && mouseY > 25 && mouseY < 80){
    selectedButton = 11;j=11;
  }
  if (mouseX > 1020 && mouseX < 1070 && mouseY > 25 && mouseY < 80){
    selectedButton = 12;j=12;
  }
  if (mouseX > 1100 && mouseX < 1160 && mouseY > 25 && mouseY < 80){
    selectedButton = 13;j=13;
  }
  if (mouseX > 1180 && mouseX < 1260 && mouseY > 25 && mouseY < 80){
    selectedButton = 14;j=14;
  }
}



function draw() {
    background(255);
    
    fill(150);
    drawButtons();
    textSize(18);
    textAlign (LEFT, RIGHT);
    if (weatherData) {
      fill(50)
      text('The current temperature in ',200,200);
      textSize(36);
      fill(0,138,138);
      text(selectedCity[j],300,230);
      textSize(18) ;
      fill(100);
      text(' is ',415,260);
      textSize(36) ;
      fill(0,138,138);
      text(temperature, 400,290);
    }
    else {
      text('Failed to load ;(', 200, 200);
    }
}
