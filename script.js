console.log("hello world");
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

function playround()
{
    const humanselection=gethumanchoice().toLowerCase();
    const humancode=encode(humanselection);
    const compselection=getcomputerchoice();
    const compcode=encode(compselection);

    if(humancode-compcode===0)
    {
        console.log(humanselection+" = "+compselection+" -> Draw");
    }
    else if((humancode-compcode+3)%3===1)
    {
        console.log(humanselection+" beats "+compselection+" -> you win");
        humanscore++;
    }
    else
    {
        console.log(compselection+" beats "+humanselection+" -> computer wins");
        computerscore++;
    }

}

//main
let humanscore=0;
let computerscore=0;
playround();