var btn = document.getElementById("Switch");
var bulb = document.getElementById("bulb");
btn.addEventListener("click",function(){
    //bulb.innerHTML="<p>Hi!</p>";
    if(bulb.style.backgroundColor=="yellow")
        bulb.style.setProperty("background-color", "White");
    else    
        bulb.style.setProperty("background-color", "Yellow")
});