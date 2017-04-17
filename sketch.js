var apikey = "&appid=3c0233eb728bb3f2315843fc64ca422a";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "New York";
var units = "&units=metric";
var icon;
var request = url + city + units + apikey;
var dataSet;
var input;
var button;

function preload(){
  loadJSON(request,getData);
}

function getData(data){
  dataSet = data;
  img = createImg("http://openweathermap.org/img/w/"+dataSet.weather[0].icon+".png");
}

function setup() {
  createCanvas(800,600);
  input = createInput();
  button = createButton("Submit");
  button.mousePressed(getInfo);
  console.log(dataSet);
}

function draw() {
  background(135, 206, 235, 127);
  fill(255);
  if(dataSet){
  icon = dataSet.weather[0].icon;
  text(city, 10, 250);
  text("Current Temp: " +dataSet.main.temp, 10, 300);
  text("Min Temp: " +dataSet.main.temp_min, 10, 325);
  text("Max Temp: " +dataSet.main.temp_max, 10, 350);
  text("Weather: " +dataSet.weather[0].description, 10, 375);
  image(img, width/2, height/2, 100, 100);
  }
}

function getInfo(){
  city = input.value();
  request = url + city + units + apikey;
  loadJSON(request,getData);
}
