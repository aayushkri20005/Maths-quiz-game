const quesele=document.getElementById("question");
const queformele=document.getElementById("questionForm");
const scorele=document.getElementById("score");



const randomnum=(min,max)=>{
return Math.floor(Math.random()*(max-min+1)+min);
};
let storedans;
let score=localStorage.getItem("score");
const genarateq=()=>{
const rand1=randomnum(1,25);
const rand2=randomnum(1,25);
const randq=randomnum(1,4);
let ques;
let ans;
// const ques=`Q what is ${rand1} multiply by ${rand2} ?`
// const ans=rand1*rand2;
switch(randq){
    case 1:
        ques=`Q what is ${rand1} * ${rand2} ?`
        ans=rand1*rand2;
        break;
    case 2:
         ques=`Q what is ${rand1} +  ${rand2} ?`
         ans=rand1+rand2;
        break;

    case 3:
         ques=`Q what is ${rand1} - ${rand2} ? if less than 0 then ans in -ve`
         ans=rand1-rand2;
        break;

    case 4:
         ques=`Q what is ${rand1} % ${rand2} ?`
         ans=rand1/rand2;
        break;
    default:
        ques=`Q what is ${rand1} +  ${rand2} ?`
        ans=rand1+rand2;
        break;

}
return {ques,ans};
};

const showq=()=>{
    const {ques,ans}=genarateq();
quesele.innerText=ques;
scorele.innerText=score;
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
localStorage.setItem("score",score);
event.target.reset();
showq();
}