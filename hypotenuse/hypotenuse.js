var sides=document.querySelectorAll(".side");
var checkButton=document.querySelector('#Check-hypotenuse');
var outputEl=document.querySelector("#out-txt");
function checkNegative(evnt){
    if(evnt.target.value<0){
        outputEl.innerText="Please enter a positive number"
        outputEl.style.display="block"; 
    }
    else{
        outputEl.innerText="";
    }
}
function calculateHypotenuse(){
   var suquareSum=0;
   for(let i=0;i<sides.length;i++){
    
       suquareSum+=Math.pow(sides[i].value,2);
   }
   var hypotenuse=Math.sqrt(suquareSum);
   outputEl.innerText=`The length of the hypotenuse is ${hypotenuse}`;
}
checkButton.addEventListener("click",calculateHypotenuse);
for(let i=0;i<sides.length;i++){
    sides[i].addEventListener("input",checkNegative);
}