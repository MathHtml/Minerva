console.log("is called");
    

var showDot = false;
var q1 = Number(document.getElementById("q1").value); // Mod/Tra
var q2 = Number(document.getElementById("q2").value); // Ide/Mat
var q3 = Number(document.getElementById("q3").value); // Mod/Tra
var q4 = Number(document.getElementById("q4").value); // Ide/Mat
var q5 = Number(document.getElementById("q5").value); // Mod/Tra
var q6 = Number(document.getElementById("q6").value); // Ide/Mat
var q7 = Number(document.getElementById("q7").value); // Mod/Tra
var q8 = Number(document.getElementById("q8").value); // Ide/Mat
function setup(){ 
    // draw a koordinatessystem with colours
    // draw a point from getPosition
    var scale = 2;
    var canvasSize = 200*scale;
    var size = canvasSize/2;
    var coordFix = size;
    var buffer = size*0.05;

    createCanvas(canvasSize,canvasSize); 
    background(200);
    
    // draw a koordinatessystem with colours, you might use functions fill, rect and text
    strokeWeight(3);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
    fill(26, 171, 227);
    rect(0, 0, 200, 200);
    fill(114, 180, 83);
    rect(200, 0, 400, 200);
    fill(175, 137, 250);
    rect(0, 200, 200, 200);
    fill(246, 160, 191);
    rect(200, 200, 400, 400);

    
}

function draw(){
    var scale = 2;
    var canvasSize = 200*scale;
    var size = canvasSize/2;
    var coordFix = size;
    fill(0,0,0);
    if(showDot){
        var arr = getPosition(q1, q2, q3, q4, q5, q6, q7, q8);
        var x = arr[0];
        var y = arr[1];
        var xCoordFix = x*scale+coordFix
        var yCoordFix = ((y*scale-coordFix)**2)**0.5
        // draw dot from coordinates.
        fill(0,0,0);
        rect(x, y, 5, 5);
    }
}
// Get answers from all 8 outputs
// Høj værdi = Moderne/Idealistisk
// Lav værdi = Traditionel/Materialistisk

//etc

// make function to make point x,y where x and y in [-0;0] from 8 answers.
// Sum af værdier fra spørgsmål for at lave x- og y-koordinater
var getPosition = function(q1, q2, q3, q4, q5, q6, q7, q8){
    var x = ((q2+q4+q6+q8)*100)/4-100
    var y = ((q1+q3+q5+q7)*100)/4-100
    print(x);
    return [x, y];
}
var placePressed = function(){
    showDot=true;
    q1 = Number(document.getElementById("q1").value); // Mod/Tra
    q2 = Number(document.getElementById("q2").value); // Ide/Mat
    q3 = Number(document.getElementById("q3").value); // Mod/Tra
    q4 = Number(document.getElementById("q4").value); // Ide/Mat
    q5 = Number(document.getElementById("q5").value); // Mod/Tra
    q6 = Number(document.getElementById("q6").value); // Ide/Mat
    q7 = Number(document.getElementById("q7").value); // Mod/Tra
    q8 = Number(document.getElementById("q8").value); // Ide/Mat
    var arr = getPosition(q1, q2, q3, q4, q5, q6, q7, q8);
    persontyper(arr[0], arr[1]);
}
/**
 * Vælg den rigtige tekste afhængig af fortegn på x og y
 * @param {Ide/Mat} x 
 * @param {Mod/Tra} y 
 */
var persontyper = function(x, y){
    // Individualit
    if (x < 200 && y < 200){
        document.getElementById ("d1").style.display="block";
        document.getElementById ("d2").style.display="none";
        document.getElementById ("d3").style.display="none";
        document.getElementById ("d4").style.display="none";
    }
// Egenhændig
    else (x < 200 && y > 199){
        
    }
// Solidarisk
    else (x > 200 && y < 200){

    }
// Tradition
    else (x > 200 && y > 200){

    }

}
console.log("JavaScript finished");

