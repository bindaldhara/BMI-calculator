let button=document.getElementById("button");
button.addEventListener('click',function(){
let weight=document.getElementById("weight").value;
let height=document.getElementById("height").value;
let finalbmi=(weight/(height*height))*10000;
document.getElementById("BMI").value=finalbmi;
});