var baseURL= 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey= '176d293c90dad47eec4535f35ec1a4fb';
var city='Homs';
var units= 'metric';
var humidity=0;
var temperature;
var weatherData;
var cityInput;
var titles = ['New York','Chicago','Paris','Madrid','Damascus','Tokyo']
var selectedButton = 5;



function setup(){
    createCanvas(800,800);
    console.log('apiData loaded successfully')

}

function getWeatherData(apiData){
weatherData=apiData;
console.log(apiData);
temperature=weatherData.main.temp;
humidity=weatherData.main.humidity;

// titles=selectedButton.
}

function queryAPI(){
    var query= baseURL + titles.value() + '&apiKey=' + apiKey + '&units=' + units;
    loadJSON(query, getWeatherData);

}

function drawButtons(){
    
    for (var i = 1; i < titles.length; i++) {
        if (selectedButton== i) {
            fill(0,138,138)
        }
        else {

            fill(235)

        }
        stroke(0);
        strokeWeight(1);
        ellipse(75 + 80* i, 60, 50, 50)
        fill(50);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(18);
        text(titles[i], 75+80*i, 100)
        };

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


 function draw(){

    background(255);
    // drawButtons();
    textSize(16);
    noStroke();
      fill(0);
      text('The current temperature in ' + city + ' is ' + temperature + ' C', 320, 200);
      
     // text(str(round(mouseX)) + ',' + str(round(mouseY)), mouseX, mouseY)
}
