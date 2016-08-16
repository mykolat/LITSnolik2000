//Global variables   
var cyclers;    
var tickCounter = 5;    

//Standart random function    
function random(min, max) {      
    return Math.round(Math.random() * (max - min) + min);    
}    

//Makes all horses to do the step    
function makeStep(min, max) {      
    for (var i = 0; i < cyclers.length; i++) {        
        cyclers[i] = cyclers[i] + random(min, max);        
        document.getElementById("bike" + i).innerHTML = (" " + cyclers[i]);      
    }    
}    

//Find a winner    
function findFirstCycler() {      
    var maxCycler = 0,
        winner = 0;      
    for (var i = 0; i < cyclers.length; i++) {        
        if (cyclers[i] > maxCycler) {          
            maxCycler = cyclers[i];          
            winner = i + 1;        
        }      
    }      
    document.getElementById("win").innerHTML = (" " + winner);    
}

    
function tick() {      
    if (tickCounter++ < 2) {        
        makeStep(95, 101);        
        findFirstCycler();      
    }    
}
    
function startGame() {      
    tickCounter = 0;      
    cyclers = [0, 0, 0, 0, 0];
}                
function continueRun() {            
    tickCounter = 0;
    table();        
}
function table(){
for (var i = 0; i < 5;i++) {
document.getElementById("bike" + i).innerHTML = (cyclers[i]);
}
}

window.setInterval(tick, 1000);

//var horse = [10, 11, 20, 30, 40, 50, 60];
