let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
  const options=["rock","paper","scissors"];
  const randIdx= Math.floor(Math.random() * 3);
  return options[randIdx];
}
const drawGame=()=>{
  msg.innerText="game is draw";
  msg.computedStyleMap.backgroundColor='#081b31';

}
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame=(userChoice)=>{

  const compchoice=genCompChoice();

  if(userChoice===compchoice){
    drawGame();
  }
  else{
    let userWin=true;
    if(userChoice==="rock"){
      userWin = compchoice==="paper"?false:true;
    }
    else if(userChoice="paper"){
      userWin= compchoice==="scissors"?false:true;

    }
    else{
      userWin= compchoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compchoice);
  }
};


choices.forEach((choice) => {
  choice.addEventListener("click",() => {
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });
});