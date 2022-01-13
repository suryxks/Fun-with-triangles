let checkBtn=document.querySelector("#quiz-check");
let message=document.querySelector("#quiz-message");
let form=document.querySelector(".quiz-form");
const ans = ['90', 'right angled','180','1','80','60']; 
const calculateScore=()=>{
    let score=0;
    let index=0;
    let formData=new FormData(form);
    for(let value of formData.values()){
        if(value==ans[index]){
            score=score+1;
        }
        index=index+1;
    }
    message.innerHTML=`Your Score is ${score}`;
}

checkBtn.addEventListener("click",calculateScore);