let count=0
function Decrease(){


    count--
    document.getElementById("txt").innerHTML=count

if(count<0){
    document.getElementById("txt").style.color="red"
}
else if(count==0){
    document.getElementById("txt").style.color="black"
}
}


function reset(){
{
  count=0;
    document.getElementById("txt").innerHTML=count
    document.getElementById("txt").style.color="black"
}
}

function Increase(){
{
    count++
    document.getElementById("txt").innerHTML=count
    if(count>0){
        document.getElementById("txt").style.color="green"
    }
    else if(count==0){
        document.getElementById("txt").style.color="black"
    }
}
}