var angles=document.querySelectorAll(".angle");
var checkBtn=document.querySelector("#Check-btn");
var messge=document.querySelector("#message");
messge.style.display="none";
function checkHandler(){
    let sum=0;
    for(let i=0;i<angles.length;i++){
       sum+=Number(angles[i].value);
    }
    if(sum===180){
        messge.innerText="The given angles makes a triangle";
       
        messge.style.display="block";
    }
    else{
        messge.innerText="The given angles cannot make a triangle";
        messge.style.display="block";
    }
}
checkBtn.addEventListener("click",checkHandler);