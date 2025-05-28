let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", changedark);

function changedark(){
    let body=document.querySelector("body")
    let content=document.querySelector(".content")

    if (content.style.backgroundColor == "white"){
        content.style.backgroundColor = "black";
        body.style.color = "white";
    }
    else {
        content.style.backgroundColor = "white";
        body.style.color = "black";
    }
    
}