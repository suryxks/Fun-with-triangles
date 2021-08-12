var sides=document.querySelectorAll(".side");
var checkButton=document.querySelector('#Check-Area');
var outputEl=document.querySelector("#outputEl");

outputEl.style.display="block";
function calculateArea(){
    var area=0.5;
    for(let i=0;i<sides.length;i++){
        area=area*sides[i].value;
    }
    outputEl.innerText=`The area of the triangle is ${area} cm²`
        
}
checkButton.addEventListener("click",calculateArea);