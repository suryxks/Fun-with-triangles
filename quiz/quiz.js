var checkBtn=document.querySelector("#quiz-check");
var message=document.querySelector("#quiz-message");
var form=document.querySelector(".quiz-form");
const ans = ['90', 'right angled']; 
function calculateScore(){
    var score=0;
    var index=0;
    var formData=new FormData(form);
    for(let value of formData.values()){
        if(value==ans[index]){
            score=score+1;
        }
        index=index+1;
    }
    message.innerHTML=`Your Score is ${score}`;
}

checkBtn.addEventListener("click",calculateScore);