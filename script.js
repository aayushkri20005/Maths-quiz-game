const quesele=document.getElementById("question");
const queformele=document.getElementById("questionForm");
const scorele=document.getElementById("score");



const randomnum=(min,max)=>{
return Math.floor(Math.random()*(max-min+1)+min);
};
let storedans;
let score=0;
const genarateq=()=>{
const rand1=randomnum(1,25);
const rand2=randomnum(1,25);
const ques=`Q what is ${rand1} multiply by ${rand2} ?`
const ans=rand1*rand2;
return {ques,ans};
};

const showq=()=>{
    const {ques,ans}=genarateq();
quesele.innerText=ques;
storedans=ans;
}
showq();
const checkAnswer=(event)=>{
event.preventDefault();
const formda = new FormData(queformele);
const userformans=+formda.get("ans");
if(userformans===storedans){
score++;
}
else{
    score--;
}
scorele.innerText=score; 
event.target.reset();
showq();
}