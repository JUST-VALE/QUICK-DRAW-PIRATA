function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
}

function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function draw(){
strokeWeight(15);
stroke(0);
if (mouseIsPressed) { line(pmouseX, pmouseY, mouseX, mouseY); }
}function classifyCanvas(){
classifier.classify(canvas,hola)
}
function hola(error,result){
if(error){
console.log(error)
}else{
console.log(result);
document.getElementById("adivino").innerHTML=result[0].label;
document.getElementById("adivino2").innerHTML=result[0].confidence;
}
}
function adivino3(){
background("white")
}