//Global variables   
var cyclers = [];    
var tickCounter = 5;
var distance = 1238;    

//Standart random function    
function random(min, max) {      
    return Math.round(Math.random() * (max - min) + min);    
}    

// Constructor
function Bike(name, age, number, energy){
  this.name = name;
  this.age = age;
  this.image = number;
  this.speed = Math.round((distance/random(100, 115) - age) + (energy - random(10, 20)));
}
function makeArr(){
  cyclers.push(new Bike('Tom', random(17, 25), 'pic1', 78));
  cyclers.push(new Bike('Bill', random(17, 25), 'pic2', 65));
  cyclers.push(new Bike('John', random(17, 25), 'pic3', 81));
  cyclers.push(new Bike('Alex', random(17, 25), 'pic4', 75));
  cyclers.push(new Bike('Tim', random(17, 25), 'pic5', 68));
}
//Makes all horses to do the step                  
function makeStep(min, max) {      
    for (var i = 0; i < cyclers.length; i++) {        
        cyclers[i].speed = cyclers[i].speed + random(min, max);        
        document.getElementById("bike" + i).innerHTML = (" " + cyclers[i].speed);      
    }    
}    

//Find a winner    
function findFirstCycler() {      
    var maxCycler = 0,
        winner;      
    for (var i = 0; i < cyclers.length; i++) {        
        if (cyclers[i].speed > maxCycler) {          
            maxCycler = cyclers[i].speed;          
            winner = cyclers[i].name;        
        }      
    }      
    document.getElementById("win").innerHTML = (" " + winner);    
}

    
function tick() {      
    if (tickCounter++ < 2) {        
        makeStep(35, 42);        
        findFirstCycler();      
    }    
}
    
function startGame() {      
    tickCounter = 0;      
    for (var i = 0; i < cyclers.length; i++) {        
        cyclers[i].speed = 0;
      }
    makeArr();
    draw(); 
    draw();  
}                
function continueRun() {            
    tickCounter = 0;
    table();
    draw(); 
    draw();        
}
function table(){
for (var i = 0; i < 5;i++) {
document.getElementById("bike" + i).innerHTML = (cyclers[i].speed);
}
}


function draw(){
//  var length = 0;
// length += cyclers[0].speed;
document.getElementById(cyclers[0].image).style.left = cyclers[0].speed + 'px';
}


window.setInterval(tick, 1000);

//document.getElementById(cyclers.image).style.left = '200px';
