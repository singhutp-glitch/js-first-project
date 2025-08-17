console.log("hello world");

function getcomputerchoice()
{
    randnum = Math.floor(Math.random()*3);
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

console.log(getcomputerchoice());