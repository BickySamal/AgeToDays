function ageInDays(){
    var birthyear = prompt("What year were you born?");
    var year = prompt("What is the current year?")
    let ans = (year-birthyear)*365;
    let h1 = document.createElement("h1");
    let result = document.createTextNode("You are "+ans+" days  old.");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(result);
    document.getElementById("result").appendChild(h1);
}

function reset ()
{
    document.getElementById("ageInDays").remove();
}
