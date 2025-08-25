//functions
function getcomputerchoice()
{
    let randnum = Math.floor(Math.random()*3);
    if(randnum ===0)
    {
        return "rock";
    }
    else if(randnum===1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function gethumanchoice()
{
    return prompt("enter your choice ","rock");
}

function playgame()
{

    for(let i=1;i<=5;i++)
    {
        console.log("round "+i);
        playround();
        console.log("you: "+humanscore+" computer: "+computerscore);
    }
    if(humanscore>computerscore)
    {
        console.log("YOU WIN");
    }
    else if(humanscore<computerscore)
    {
        console.log("YOU LOSE");
    }
    else
    {
        console.log("DRAW");
    }
    //inner functions


   
}
function encode(choice)
{
    if(choice==="rock")
    {
        return 0;
    }
    else if(choice==="paper")
    {
        return 1;
    }
    else
    {
        return 2;
    }
}

function playround(humanchoice)
{

    const humanselection=humanchoice.toLowerCase();
    const humancode=encode(humanselection);
    const compselection=getcomputerchoice();
    const compcode=encode(compselection);
    const result=document.querySelector(".result");

    if(humancode-compcode===0)
    {
        result.textContent= ("RESULT : "+humanselection+" = "+compselection+" :- Draw");
    }
    else if((humancode-compcode+3)%3===1)
    {
        result.textContent=("RESULT : "+humanselection+" beats "+compselection+" :- you win");
        humanscore++;
    }
    else
    {
        result.textContent=("RESULT : "+compselection+" beats "+humanselection+" :- computer wins");
        computerscore++;
    }

}
function showscore()
{
    score.textContent="you: "+humanscore +"    computer: " +computerscore;
}


//main
const btndiv= document.querySelector("div");
const btnlist=document.querySelector("ul");
const body=document.querySelector("body");
const score=document.querySelector(".score");
const winner=document.querySelector(".winner");

let humanscore=0;
let computerscore=0;
let endflag=0;
showscore();
    
btnlist.addEventListener("click",function(event){
    if(endflag===0)
    {
    let tar=event.target;    
    playround(tar.textContent);
    showscore();
    if(humanscore>=5)
    {
        console.log("you win");
        endflag++;
        winner.textContent="YOU WIN";
    }
    else if(computerscore>=5)
    {
        console.log("computer wins");
        endflag++;
        winner.textContent="COMPUTER WINS";
    }
    }
})


