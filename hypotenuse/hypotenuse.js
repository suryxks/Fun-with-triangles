let sides=document.querySelectorAll(".side");
let checkButton=document.querySelector('#Check-hypotenuse');
let outputEl=document.querySelector("#out-txt");
const checkNegative=(evnt)=>{
    if(evnt.target.value<0){
        outputEl.innerText="Please enter a positive number"
        outputEl.style.display="block"; 
    }
    else{
        outputEl.innerText="";
    }
}
const calculateHypotenuse=()=>{
   let suquareSum=0;
   for(let i=0;i<sides.length;i++){
    
       suquareSum+=Math.pow(sides[i].value,2);
   }
   let hypotenuse=Math.sqrt(suquareSum);
   outputEl.innerText=`The length of the hypotenuse is ${hypotenuse}`;
}
checkButton.addEventListener("click",calculateHypotenuse);
for(let i=0;i<sides.length;i++){
    sides[i].addEventListener("input",checkNegative);
}