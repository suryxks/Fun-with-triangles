let sides=document.querySelectorAll(".side");
let checkButton=document.querySelector('#Check-Area');
let outputEl=document.querySelector("#outputEl");

outputEl.style.display="block";
const checkNegative=evnt=>{
    if(evnt.target.value<0){
        outputEl.innerText="Please enter a positive number"
        outputEl.style.display="block"; 
    }
    else{
        outputEl.innerText="";
    }
}
const calculateArea=()=>{
    let area=0.5;
    for(let i=0;i<sides.length;i++){
        area=area*sides[i].value;
    }
    outputEl.innerText=`The area of the triangle is ${area} cm²`
        
}
checkButton.addEventListener("click",calculateArea);
for(let i=0;i<sides.length;i++){
    sides[i].addEventListener("input",checkNegative);
}