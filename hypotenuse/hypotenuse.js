var sides=document.querySelectorAll(".side");
var checkButton=document.querySelector('#Check-hypotenuse');
var outputEl=document.querySelector("#out-txt");

function calculateHypotenuse(){
   var suquareSum=0;
   for(let i=0;i<sides.length;i++){
    
       suquareSum+=Math.pow(sides[i].value,2);
   }
   var hypotenuse=Math.sqrt(suquareSum);
   outputEl.innerText=`The length of the hypotenuse is ${hypotenuse}`;
}
checkButton.addEventListener("click",calculateHypotenuse);